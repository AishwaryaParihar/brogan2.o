import React from 'react'

export const CancelProces = () => {
  return (
    <div>
        <div className="container mx-auto p-4 mt-5">
      <div className="bg-white p-6 rounded-lg shadow-md pt-5">
        <h4 className="text-2xl font-bold mb-4">Cancellation Policies</h4>
        <div className="space-y-4">
          <p>You cannot cancel the order and demand a refund once the order is successfully placed and processed by the payment gateway. Refund requests will only be considered in the following cases, and refund will be in the form of store credit:</p>
          <ul className="list-disc list-inside ml-6">
            <li>If the buyer does not get the delivery of the ordered products within 45 days if Brogan Boots fails to ship the ordered products.</li>
            <li>If the shipping location is not serviced by our partner courier companies.</li>
          </ul>
          <p>No refund requests will be entertained for damaged products. Damaged products will be exchanged as per our exchange policy.</p>
          <p>No returns will be entertained if a customer wants to return the product for the reason that he/she doesn't like it after delivery of the product or feels the product doesn't match his or her expectations. No refunds will be given in the following cases:</p>
          <ul className="list-disc list-inside ml-6">
            <li>Incorrect or insufficient address mentioned by the customer.</li>
            <li>Non-availability of recipient at the mentioned address and/or premises.</li>
            <li>Refusal to accept products.</li>
            <li>Delivered at the place/to the person specifically mentioned by the customer other than the customer himself/herself.</li>
            <li>Force majeure event.</li>
            <li>In case the product has undergone any tampering by the customer.</li>
          </ul>
          <p>All emails in this regard are to be sent to:</p>
          <ul className="list-disc list-inside ml-6">
            <li><a href="mailto:broganboots19@gmail.com" className="text-blue-500 hover:underline">broganboots19@gmail.com</a></li>
            <li><a href="mailto:broganboots@gmail.com" className="text-blue-500 hover:underline">broganboots@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
