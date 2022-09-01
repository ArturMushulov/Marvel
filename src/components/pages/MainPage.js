import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundaries from "../errorBoundaries/ErrorBoundaries";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <ErrorBoundaries>
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
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;