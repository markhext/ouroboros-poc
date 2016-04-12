
import React from 'react';


class CategoryForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            categoryName: '',
            pageTitle: '',
            submitForm: props.submitForm
        };

        this.handleCategoryName = this.handleCategoryName.bind(this);
        this.handlePageTitle = this.handlePageTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleCategoryName (e) {
        this.setState({
            categoryName: e.target.value
        });
    }

    handlePageTitle (e) {
        this.setState({
            pageTitle: e.target.value
        });
    }

    handleSubmit (e) {

        e.preventDefault();

        var _c = this.state.categoryName;
        var _p = this.state.pageTitle;

        this.state.submitForm({
            categoryName: _c, pageTitle: _p
        });

        this.setState({
            categoryName: '',
            pageTitle: ''
        });
    }

    render () {
        return (

            <div className="category-form">

                <form onSubmit={this.handleSubmit}>

                    <div className="field">

                        <label>Category name </label>
                        <input type="text" name="categoryName" value={this.state.categoryName} onChange={this.handleCategoryName} />

                     </div>

                    <div className="field">

                        <label>Page title</label>
                        <input type="text" name="pageTitle" value={this.state.pageTitle} onChange={this.handlePageTitle} />

                    </div>

                    <div className="field">
                        <button type="submit" className="admin-btn btn-primary">Submit</button>
                    </div>

                </form>

            </div>

        );
    }
}



module.exports = CategoryForm;


