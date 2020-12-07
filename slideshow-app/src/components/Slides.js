import React, { useState, useEffect } from 'react';

function Slides({ slides }) {

    const [index, setIndex] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(slides[0])
    const [disableRestart, setDisableRestart] = useState(true)
    const [disablePrev, setDisablePrev] = useState(true)
    const [disableNext, setDisableNext] = useState(false)

    function restart() {
        setIndex(0)
        setCurrentSlide(slides[0])
        setDisableRestart(true)
        setDisablePrev(true)
        setDisableNext(false)
    }

    function prev() {
        if (index - 1 >= 0) {
            setIndex(index - 1)
            setCurrentSlide(slides[index - 1])
            setDisableNext(false)
        }
        if (index - 1 === 0) {
            setDisableRestart(true)
            setDisablePrev(true)
        }
    }

    function next() {
        if (index + 1 < slides.length) {
            setIndex(index + 1)
            setCurrentSlide(slides[index + 1])
            setDisablePrev(false)
            setDisableRestart(false)
        }

        if (index + 1 === slides.length - 1) {
            setDisableNext(true)
        }
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" disabled={disableRestart} className="small outlined" onClick={() => { restart() }}>Restart</button>
                <button data-testid="button-prev" disabled={disablePrev} className="small" onClick={() => { prev() }}>Prev</button>
                <button data-testid="button-next" disabled={disableNext} className="small" onClick={() => { next() }}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
