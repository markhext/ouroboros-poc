import React from 'react';



class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {categories: []};


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



    render () {


        return (

            <header id="page-header" className="white">

                <section className="header-section lite-grey">



                    <div className="container">

                    </div>

                    <div className="upper-right-links">
                        <a href="">Join /log in</a>
                        <a href="">Site feedback</a>
                        <a href="">Help</a>
                        <a href="/admin">Admin</a>
                    </div>

                </section>


                <section className="header-section">

                    <div className="container">

                        <nav>

                        { this.state.categories.map((t, k)=>{

                            return (


                                <a key={k} href="">{t.categoryName}</a>
                            )

                        }) }

                            </nav>






                    </div>

                </section>






            </header>
        )


    }

}

module.exports = Header;