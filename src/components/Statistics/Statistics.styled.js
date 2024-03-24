import styled from "styled-components";

export const Block = styled.section`
    background-color: #fff;
    margin-bottom: 40px;
`;

export const Title = styled.h2`
    padding: 32px 16px;
    font-size: 24px;
    text-align: center;
    margin: 0;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.li`
    text-align: center;
    flex-grow: 1;
    padding: 16px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(1) {
        background-color: rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)}
        );
    }

    &:nth-child(2) {
        background-color: rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)}
        );
    }

    &:nth-child(3) {
        background-color: rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)}
        );
    }

    &:nth-child(4) {
        background-color: rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)}
        );
    }

    &:nth-child(5) {
        background-color: rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)}
        );
    }
`;

export const ItemLabel = styled.span``;

export const ItemPercentage = styled.span`
    font-size: 24px;
    font-weight: 700;
`;