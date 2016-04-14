
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
        this.handleDescription = this.handleDescription.bind(this);
        this.handleMetaKeywords = this.handleMetaKeywords.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleURL = this.handleURL.bind(this);
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

    handleURL (e) {
        this.setState({
            url: e.target.value
        });
    }

    handleDescription (e) {
        this.setState({
            pageDescription: e.target.value
        });
    }

    handleMetaKeywords (e) {
        this.setState({
            metaKeywords: e.target.value
        });
    }


    handleSubmit (e) {

        e.preventDefault();

        this.state.submitForm({
            categoryName: this.state.categoryName,
            pageTitle: this.state.pageTitle,
            pageDescription: this.state.pageDescription,
            metaKeywords: this.state.metaKeywords,
            url: this.state.url
        });

        this.setState({
            categoryName: '',
            pageTitle: '',
            pageDescription: '',
            metaKeywords: '',
            url: ''
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

                        <label>Page heading</label>
                        <input type="text" name="heading" value={this.state.heading} onChange={this.handleHeading} />

                    </div>


                    <div className="field">

                        <label>Page URL</label>
                        <input type="text" name="pageUrl" value={this.state.url} onChange={this.handleURL} />

                    </div>

                    <div className="field">

                        <label>Banner image path</label>
                        <input type="text" name="bannerImage" value={this.state.bannerImage} onChange={this.bannerImage} />

                    </div>


                    <div className="field divider">

                        <h3>Page Data</h3>

                    </div>

                    <div className="field">

                        <label>Page title</label>
                        <input type="text" name="pageTitle" value={this.state.pageTitle} onChange={this.handlePageTitle} />

                    </div>


                    <div className="field">

                        <label>Page description</label>
                        <textarea name="pageDescription" value={this.state.pageDescription} onChange={this.handleDescription}></textarea>

                    </div>

                    <div className="field">

                        <label>Meta keywords</label>
                        <textarea name="metaKeywords" value={this.state.metaKeywords} onChange={this.handleMetaKeywords}></textarea>

                    </div>



                    <div className="field divider">

                        <h3>Open Graph Markup</h3>

                    </div>


                    <div className="field">

                        <label>OGM - URL</label>
                        <input type="text" name="pageTitle"  />

                        <label>Check to use page URL</label>
                        <input type="checkbox" />

                    </div>

                    <div className="field">

                        <label>OGM - Type</label>
                        <select>
                            <option>Website</option>
                            <option>Article</option>
                        </select>
                        <input type="text" name="pageTitle"   />

                    </div>

                    <div className="field">

                        <label>OGM - Title</label>
                        <input type="text" name="pageTitle"   />

                    </div>

                    <div className="field">

                        <label>OGM - title</label>
                        <input type="text" name="pageTitle"   />

                    </div>

                    <div className="field">

                        <label>OGM - image</label>
                        <input type="file" name="pageTitle"   />

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


