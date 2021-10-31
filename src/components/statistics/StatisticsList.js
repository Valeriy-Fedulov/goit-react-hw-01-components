import Statistics from "./Statistics";
import PropTypes from 'prop-types';

export default function StatisticsList({ title, stats }) {
    return (
        <section className="statistics">
            {title && < h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map(stat => (
                    <li className="item" key={stat.id}>
                        <Statistics
                            label={stat.label}
                            percentage={stat.percentage}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
}