import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

export const Th = styled.th`
    background-color: green;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    padding: 16px;

    &:not(:last-child) {
        border-right: 1px solid #fff;
    }
`;

export const Tr = styled.tr`
    background-color: #fff;

    &:nth-child(even) {
        background-color: #ECF2F3;
    }
`;

export const Td = styled.td`
    text-align: center;
    font-size: 14px;
    padding: 16px;
    text-transform: capitalize;

    &:not(:last-child) {
        border-right: 1px solid gray;
    }
`;