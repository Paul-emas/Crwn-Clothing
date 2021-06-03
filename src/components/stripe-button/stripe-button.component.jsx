import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  alert('Payment Successful');
  console.log(token);
};

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    'pk_test_51IyM85J5u25LQQgbNEP3sz7Pi6lCK30B2JaVYXgCxzmn13znI6skb2Gn3JZMMVj9HKYblVLFa1gwHfWEqWxcrRvT001lWWucZB';
  const stripePrice = price * 100;
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing L.t.d"
      image="https://i.pinimg.com/736x/58/ba/ce/58bace42e0e777c45691cecfc1f4167e.jpg"
      shippingAddress
      billingAddress
      description={`Your total price is $${price}`}
      stripeKey={publishableKey}
      amount={stripePrice}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
