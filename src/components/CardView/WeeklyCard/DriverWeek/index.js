import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function DriverWeek(props) {
  const { totals, icons, driver } = props;
  const {userPay} = totals;
  const totalPay = [userPay].reduce((total, val) => {
    return parseFloat(total) + parseFloat(val)
  }, 0).toFixed(2)



  return (
    <React.Fragment>
      <CardHeader
        avatar={
          <Avatar aria-label="pickup" className={""}>
            {icons('Driver')}
          </Avatar>
        }
        title={`${driver}`}
      />
      <CardContent>
      {totals.userRate !== '0.00%' ?
      <>
        <Typography variant="body2" color="textSecondary" component="p">
          Rate: {totals.userRate}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Total Pay: ${totalPay}
        </Typography>
      </>

      : ''}

      </CardContent>
    </React.Fragment>
  )
}
