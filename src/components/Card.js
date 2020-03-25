import React from 'react';
import { Card, 
         CardHeader, 
         CardHeaderTitle, 
         CardImage,
         CardContent,
         Media,
         MediaLeft,
         MediaContent,
         Title,
         Subtitle,
         Content, 
         Image } from 'bloomer';

const UserCard = props => {
    const { user } = props;

    return (
        <Card>
            <CardHeader>
                <CardHeaderTitle>
                    Look at this rando!
                </CardHeaderTitle>
            </CardHeader>
            <CardImage>
                <Image isRatio='4:3' src={user.picture.large} alt={`${user.name.first} headshot`} />
            </CardImage>
            <CardContent>
                <Media>
                    <MediaLeft>
                        <Image isSize='48x48' src={user.picture.large} />
                    </MediaLeft>
                    <MediaContent>
                        <Title isSize={4}>{user.name.first} {user.name.last}</Title>
                        <Subtitle isSize={6}>@{user.name.first}{user.name.last}</Subtitle>
                    </MediaContent>
                </Media>
                <Content>
                    People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                    <br/>
                    <small>11:09 PM - 30 October 2014</small>
                </Content>
            </CardContent>
        </Card>
    )
}

export default UserCard;

