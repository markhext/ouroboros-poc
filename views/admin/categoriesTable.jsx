
import React from 'react';



class TableItem extends React.Component {

    render () {
        return (
            <tr>
                <td>{this.props.data.categoryName}</td>
                <td><button className="admin-btn btn-secondary" onClick={this.props.removeCategory.bind(this, this.props.data._id)}>Remove</button></td>
            </tr>
        )
    }
}

class CategoriesTable extends React.Component {

    render () {

        return (

            <div className="category-table">

                <table>

                    <thead>
                        <tr>
                            <th>Category name</th>
                            <th>Category name</th>
                            <th>Remove Category</th>
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


