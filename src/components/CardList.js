import React from 'react';
import PropTypes from 'prop-types';
import { Section, Columns, Column } from 'bloomer';

import UserCard from './Card';

const CardList = props => {
  const { userData } = props;
  return (
    <Section>
      <Columns>
        {userData.length > 0 ? (
          userData.map(user => (
            <Column key={user.login.uuid}>
              <UserCard user={user} />
            </Column>
          ))
        ) : (
          <li>No User Data</li>
        )}
      </Columns>
    </Section>
  );
};

CardList.propTypes = {
  userData: PropTypes.array
};

export default CardList;
