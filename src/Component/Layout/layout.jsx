import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/sidebar";
import './layout.scss'


export function Layout(){
    return(
        <>
           
           
                    <Sidebar/>
                    <div className="container-fluid my-2 layout">
                        <div className="row">
                        <div className="col-10 col-lg-12 pages">
                        <span className="tags top-tags">&lt;body&gt;</span>
                        <Outlet/>

                        <span className="tags bottom-tags">&lt;body&gt;
                        <br />
                        <span className="bottom-tags-html">&lt;html&gt;</span>
                        
                        </span>
                      
                    </div>
                        </div>
                    </div>
                
        </>
    )
}

