import React from 'react'
class Galeri extends React.Component{
    render(){
        return(
            <div>
                <div className="container page-top">
                <h2>Galeri</h2>
                        <div className="row">
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <a href="https://www.instagram.com/mhmdfathoni_/" className="fancybox" rel="ligthbox">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/gambar/glr2.jpg"}  />
                            
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <a href="https://www.instagram.com/mhmdfathoni_/"  className="fancybox" rel="ligthbox">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/gambar/glr3.jpg"}  />
                            </a>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <a href="https://www.instagram.com/mhmdfathoni_/" className="fancybox" rel="ligthbox">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/gambar/glr4.jpg"}  />
                            </a>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <a href="https://www.instagram.com/mhmdfathoni_/" className="fancybox" rel="ligthbox">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/gambar/glr5.jpg"}  />
                            </a>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <a href="https://www.instagram.com/mhmdfathoni_/" className="fancybox" rel="ligthbox">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/gambar/glr6.jpg"}  />
                            </a>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <a href="https://www.instagram.com/mhmdfathoni_/" className="fancybox" rel="ligthbox">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/gambar/glr7.jpg"}  />
                            </a>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <a href="https://www.instagram.com/mhmdfathoni_/" className="fancybox" rel="ligthbox">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/gambar/glr8.jpg"}  />
                            </a>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                            <a href="https://www.instagram.com/mhmdfathoni_/" className="fancybox" rel="ligthbox">
                            <img className="zoom img-fluid " src={process.env.PUBLIC_URL+"/gambar/glr1.jpg"}  />
                            </a>
                        </div>

                    
                    </div>   
                </div>
            </div>
        )
    }
}
export default Galeri