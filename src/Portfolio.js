const Portfolio = () =>{
    return(
        <>
            <header id="hd" className="fixed-top">
                <div className="d-flex justify-content-between align-items-center container">
                    <h1><a href="">로고</a></h1>
                    <ul id="gnb" className="d-flex">
                        <li><a href="#about">나의소개</a></li>
                        <li><a href="#review">나의 작업</a></li>
                        <li><a href="#contact">나의 연락처</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li><a href="">Git</a></li>
                        <li><a href="">Notion</a></li>
                    </ul>

                </div>

            </header>
            <div id="slide" className="vh-100 bg-warning" >

            </div>

            <div id="about" className="vh-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
            
            <div id="review" className="vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>

            <div id="contact" className="vh-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio