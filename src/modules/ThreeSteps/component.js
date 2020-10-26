import React from 'react';
import getClassNames from 'classnames';

import { Subheading, SmallPrint } from '../ui';
import { getInterpolatedString, useStrings, useLanguageCode } from '../I18n';
import { usePack, usePrice, useIsFoundingMember, getPrice } from '../Pricing';

import styles from './styles.module.css';

export const Component = ({ hasBorder }) => {
  const strings = useStrings();
  const languageCode = useLanguageCode();
  const pack = usePack();
  const price = usePrice();
  const isFoundingMember = useIsFoundingMember();

  return (
    <div
      className={getClassNames(styles.container, {
        [styles.hasBorder]: hasBorder,
      })}
    >
      <div className={styles.step}>
        <div className={styles.number}>1</div>
        <div className={styles.text}>
          <Subheading>{strings.ANSWER_A_FEW_QUESTIONS}</Subheading>
          <SmallPrint>{strings.YOUR_ANSWERS_ARE_CONFIDENTIAL}</SmallPrint>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>2</div>
        <div className={styles.text}>
          {isFoundingMember ? (
            <Subheading>
              {strings.PAY}{' '}
              <span className={styles.oldPrice}>
                {getPrice(languageCode, 3)}
              </span>
              <span className={styles.newPrice}>{price}</span>🎉
            </Subheading>
          ) : (
            <Subheading>
              {strings.PAY} {price}
            </Subheading>
          )}
          <SmallPrint>
            {getInterpolatedString(strings.THE_ONE_OFF_COST, pack)}
          </SmallPrint>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>3</div>
        <div className={styles.text}>
          <Subheading>{strings.TO_PICK_A_TIME}</Subheading>
          <SmallPrint>{strings.YOU_GET_SIXTY_MINUTES}</SmallPrint>
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'ThreeSteps';
