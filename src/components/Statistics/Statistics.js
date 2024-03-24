import PropTypes from 'prop-types'

import { Block, Item, ItemLabel, ItemPercentage, List, Title } from "./Statistics.styled";

const Statistics = ({title, stats=[]}) => {
    return (
        <Block data-cmp="Statistics">
            <Title>{title}</Title>

            <List>
                {
                    stats.map(({id, label, percentage}) =>  (
                        <Item key={id}>
                            <ItemLabel>{label}</ItemLabel>
                            <ItemPercentage>{percentage}</ItemPercentage>
                        </Item>
                    ))
                }
            </List>
        </Block>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
};

export default Statistics;
