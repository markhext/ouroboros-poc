
import React from 'react';
import SideBar from './sideBar.jsx';
import AdminHeader from './adminHeader.jsx';
import CategoryForm from './categoryInputForm.jsx';
import CategoriesTable from './categoriesTable.jsx';


class Base extends React.Component {


    constructor(props) {
        super(props);

        this.state = {categories: []};
        this.removeCategory = this.removeCategory.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

    componentDidMount () {


        fetch('/get-categories', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=> {
                return response.json();
            }).then((j)=>{

                this.setState({categories: j});

            });
    }


    submitForm (submission) {

        console.log('submission', submission);


        fetch('/submit-category', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "categoryName" : submission.categoryName,
                "title" : submission.pageTitle
            })
        }).then((response) => {
            return response.json();

        }).then((j) => {

                this.setState({categories: j});

            });
    }


    removeCategory (item) {


        fetch(`/delete-category/${item}`, {
            method: 'delete'

        }).then((response) => response.json())
          .then((l)=>{

                this.setState({categories: l});

                console.log('RESP-- >>> ----',  this.state.categories);
            });
    }



    render () {


        return (

            <div >

                <SideBar />

                <div className="admin-view">

                    <AdminHeader />

                    <section>
                        <div className="col-5">

                            <CategoryForm submitForm={this.submitForm}  />

                        </div>

                        <div className="col-6">

                            <CategoriesTable categories={this.state.categories} removeCategory={this.removeCategory} />

                        </div>

                    </section>

                </div>

            </div>




        );
    }
}



module.exports = Base;


