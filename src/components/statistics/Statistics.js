import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics(props) {
    const { label, percentage } = props;
    return (
    <>
        <span className={s.label}>{ label }</span>
        <span className={s.percentage}>{ percentage }%</span>
    </>
    );
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

// const boxs = document.querySelector('.item');

// console.log(boxs)
// boxs.map(box => {
//     console.log(box);
//     // box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
// });

// function getRandom(min, max){
//     return Math.ceil(Math.random() * (max - min) + min)
// }