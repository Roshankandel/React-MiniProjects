import React from 'react'
import { StyledCard } from './styles/Card.styled';
function Card({ item: { id, title, body, image } }) {
    return (
        <StyledCard layout={id % 2 === 0 && "row-reverse"}>
            <div>
                <br />
                <h2>
                    {title}
                    {console.log("hello i am rosjahn")}
                </h2>
                <br />
                <p>{body}</p>
            </div>
            <div>
                <img src={`../images/${image}`} alt="" />
            </div>

        </StyledCard>

    )
}

export default Card;