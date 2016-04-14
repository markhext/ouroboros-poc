import React from 'react';

class Header extends React.Component {

    render () {

        return (

            <header id="page-header" className="white">

                <section className="header-section">

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

                        { this.props.init.categories.map((t, k)=>{

                            return (

                                <a stateData={t} key={k} href={t.url}>{t.categoryName}</a>
                            )

                        }) }

                        </nav>

                    </div>

                    <div className="lower-header-bar">

                    </div>

                </section>

            </header>
        )


    }

}

module.exports = Header;