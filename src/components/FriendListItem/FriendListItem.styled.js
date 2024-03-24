import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #fff;

    &::before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background-color: tomato;
        margin-right: 16px;
    }

    &.online::before {
        background-color: green;
    }

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const Avatar = styled.img`
    height: 80px;
    width: auto;
    margin-right: 40px;
`;

export const Name = styled.span`
    font-size: 18px;
    font-weight: 700;
`;