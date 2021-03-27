import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getCountDownDays() {
    const dateNow = new Date();
    console.log(dateNow);

    const dateSummerBegin = new Date(Date.UTC(dateNow.getUTCFullYear(), 5, 21));
    console.log(dateSummerBegin);

    const dateSummerEnd = new Date(Date.UTC(dateNow.getUTCFullYear(), 8, 23));

    if (dateNow.getUTCDate() > dateSummerEnd.getUTCDate() && dateNow.getUTCMonth() >= dateSummerEnd.getUTCMonth()) {
      dateSummerBegin.setUTCFullYear(dateSummerBegin.getUTCFullYear() + 1);
      console.log(dateNow.getUTCDate(), dateSummerEnd.getUTCDate());
    }

    const dayDuration = 24 * 60 * 60 * 1000;

    const daysToSummer = Math.round((dateSummerBegin.getTime() - dateNow.getTime()) / dayDuration);

    console.log(daysToSummer);

    if (daysToSummer == 1)
      return 'One day to summer!';
    else if (daysToSummer <= 0 )
      return '';
    else
      return daysToSummer + ' days to summer!';
  }

  render() {
    const daysToSummer = this.getCountDownDays();

    return (
      <div className = {styles.component}>
        <div className = {styles.description}>
          {daysToSummer}
        </div>
      </div>
    );
  }
}

export default DaysToSummer;