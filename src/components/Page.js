import React, {Component, PropTypes} from 'react';

export default  class Page extends Component {
    onYearClick(e) {
        this.props.setYear(+e.target.innerText);
    }

    render() {
        const {year, photos}  = this.props;
        return <div>
            <p>
                {[2016, 2015, 2014].map((v, index) =>
                    <button key={index} onClick={::this.onYearClick}>{v}</button>
                )}
            </p>
            <h3>{year} год</h3>
            <p>У тебя {photos.length} фото за {year} год</p>
        </div>
    }
}

// Какие свойства должны быть указаны
Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
};