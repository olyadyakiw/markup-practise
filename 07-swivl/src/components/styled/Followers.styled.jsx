import styled from "styled-components";

export const FollowersList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 3rem;
    @media (max-width: 1025px) {
        gap: 1.6rem;
    }
    @media (max-width: 767px) {
        max-width: 300px;
        width: 100%;
        justify-content: space-between;
    }
    
`

export const FollowersItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.5;
`

export const FollowersNumber = styled.span`
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 700;
`