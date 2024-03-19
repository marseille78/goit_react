import { Block, Item, ItemLabel, ItemPercentage, List, Title } from "./Statistics.styled";

const Statistics = () => {
    return (
        <Block data-cmp="Statistics">
            <Title>Upload stats</Title>

            <List>
                <Item>
                    <ItemLabel>.docx</ItemLabel>
                    <ItemPercentage>4%</ItemPercentage>
                </Item>
                <Item>
                    <ItemLabel>.mp3</ItemLabel>
                    <ItemPercentage>14%</ItemPercentage>
                </Item>
                <Item>
                    <ItemLabel>.pdf</ItemLabel>
                    <ItemPercentage>41%</ItemPercentage>
                </Item>
                <Item>
                    <ItemLabel>.mp4</ItemLabel>
                    <ItemPercentage>12%</ItemPercentage>
                </Item>
            </List>
        </Block>
    );
};

export default Statistics;
