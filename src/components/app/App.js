import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, ComicsPage, Page404} from "../pages";
import AppHeader from "../appHeader/AppHeader";
import CharSearchForm from "../charSearchForm/charSearchForm";
import SinglePage from "../pages/SinglePage";
import SingleCharacterLayout from '../pages/singleCharacterLayout/SingleCharacterLayout';
import SingleComicLayout from '../pages/singleComicLayout/SingleComicLayout';

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <CharSearchForm/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>                  
                        <Route path="/comics" element={<ComicsPage/>}/>  
                        <Route path="*" element={<Page404/>}/>   
                        <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic' />} />
                        <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character' />} />
                                      
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;

