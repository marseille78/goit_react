import styled from "styled-components";

export const Block = styled.div`
    background-color: #fff;
    margin-bottom: 40px;
`;

export const Description = styled.div`
    text-align: center;
    margin-bottom: 16px;
    padding: 16px;
`;

export const Avatar = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 160px;
    margin-bottom: 16px;
`;

export const Username = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 16px;
`;

export const Userdesc = styled.p`
    margin-top: 0;
    font-size: 14px;
    color: #c3c3c3;
    
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const Stats = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;

    li {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        background-color: #F3F6F9;

        &:not(:last-child) {
            border-right: 1px solid #fff;
        }
    }
`;

export const StatsLabel = styled.span`
    font-size: 12px;
`;

export const StatsQuantity = styled.span`
    font-size: 24px;
    font-weight: 700;
`;