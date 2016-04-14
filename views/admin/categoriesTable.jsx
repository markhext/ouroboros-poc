
import React from 'react';


class TableItem extends React.Component {

    componentDidMount () {
        console.log('Mounted view -----');
    }

    render () {
        return (
            <tr>
                <td>{this.props.data.categoryName}</td>
                <td>{this.props.data._id}</td>
                <td>{this.props.data.url}</td>
                <td>{this.props.data.pageDescription}</td>
                <td><button className="admin-btn btn-secondary" onClick={this.props.removeCategory.bind(this, this.props.data._id)}>Remove</button></td>
            </tr>
        )
    }
}

class CategoriesTable extends React.Component {


    componentDidMount () {

        console.log('Mounted view');

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

                this.setState({categories: categories});

            });
    }

    render () {

        console.log(this.props.categories);

        return (

            <div className="category-table">

                <table>

                    <thead>
                        <tr>
                            <th>Category name</th>
                            <th>Category id</th>
                            <th>URL</th>
                            <th>Description</th>
                            <th>Remove Category</th>
                        </tr>

                    </thead>

                    <tbody>

                        { this.props.categories.map((t, k)=>{

                            return (

                               <TableItem key={k} data={t} removeCategory={this.props.removeCategory} />
                            )

                        }) }

                    </tbody>

                </table>

            </div>

        );
    }
}


module.exports = CategoriesTable;


