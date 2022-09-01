import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import ErrorBoundaries from "../errorBoundaries/ErrorBoundaries";

import decoration from '../../resources/img/vision.png';

const App = () => {
    
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
            {/* <ErrorBoundaries>
                <RandomChar/>
            </ErrorBoundaries>
                <div className="char__content">
                    <ErrorBoundaries>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundaries>
                    <ErrorBoundaries>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundaries>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}
                <AppBanner/>
                <ComicsList/>
            </main>
        </div>
    )
}

export default App;