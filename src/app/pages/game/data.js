questions = [{
    type: 'single_choice',
    title: 'Customer Care Management',
    question: 'You receive an order request from the Customer asking Cargill to deliver goods. What steps should you follow before the order is entered in our systems?',
    instr: 'Choose the correct option.',
    selected: -1,
    submitted: false,
    choices: [{
        text: 'Promptly ensure everything is set-up correctly in our systems so the Customer has a seamless experience.',
        correct: true,

      },
      {
        text: 'Read the request notes carefully. Perform updates exactly as they are outlined. Do nothing further.',
        correct: false,
      },
      {
        text: 'Hold the order request. Contact the Customer to double check and review all the details they submitted. Document your notes in a notebook or use post-it notes, and then save them to enter when you have all your responses from the Customer.',
        correct: false,
      },
      {
        text: 'Review and double check the details with the Customer. Wait to enter the details into the system until the day before the loading date.',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>
        <ul>
          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time engaging with the customers.</li>
          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>
          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>
          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>
        </ul>`,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Option A is the correct answer.</h2>
        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>
        <ul>
          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time engaging with the customers.</li>
          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>
          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>
          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>
        </ul>`
    }
  },
  {
    type: 'sort_order',
    title: 'order_intake',
    question: `As part of our future-forward aspirations, we strive to adopt automated system rules to support smooth order intake processes where possible. 
    Even when we implement automation on occasions, certain orders may be flagged and that’s our opportunity to be involved in closer review to ensure accuracy. Today, 
    you receive a message from a customer with a one-off Special Delivery request. The Customer wants the product loaded to a specific truck type. 
What steps should you follow?`,
    instr: 'Rearrange the options in the correct order.',
    selected: -1,
    submitted: false,
    choices: [{
        text: 'Once you address the immediate request, ensure there are no other areas in the system that should be updated (i.e., Master data).',
        correct: 3,

      },
      {
        text: 'Check message details and validate that what is documented is correct.',
        correct: 1,
      },
      {
        text: 'Once the request is done, seek to understand why the Special Delivery request was needed. Was there an issue with the product? Is there an opportunity to upgrade services that would address this need in the future? Is there a chance to provide a meaningful cross/up-sell? Helping to determine the reasons behind exceptions gives us line of sight to possible longer-term solutions.  ',
        correct: 5,
      },
      {
        text: 'Determine what specific actions are required to fulfill Special Delivery request specifications (i.e., Special Approvals).',
        correct: 2,
      },
      {
        text: 'Once all updates are completed, ensure a response is sent to the Customer to keep them informed.',
        correct: 4,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>It is important that we understand the details of the request, address them and keep our customer informed.</p>`,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. This is the correct order.</h2>
      
        <ul>
          <li>Check message details and validate that what is documented is correct.</li>
          <li>Determine what specific actions are required to fulfill the Special Delivery specifications (i.e., Special Approvals).</li>
          <li>Once you address the immediate request, ensure there are no other areas in the system that should be updated (i.e., Master data).</li>
          <li>Once all updates are completed, ensure an automated response is sent to the Customer to keep them informed.</li>
          <li>Once the request is done, seek to understand why the Special Delivery was needed. Was there an issue with the product? Is there an opportunity to upgrade services 
          that would address this need in the future? Is there a chance to provide a meaningful cross/up-sell? Helping to determine the reasons behind exceptions gives us 
          line of sight to possible longer-term solutions.</li>
        </ul>
          <p>It is important that we understand the details of the request, address them, and keep our customer informed.</p>`
    }
  },
  {
    type: 'multiple_choice',
    title: 'Bonus Question – Earn a Badge!',
    question: 'In the Order Intake process, how can you be more proactive?',
    instr: 'Choose the correct options.',
    selected: -1,
    submitted: false,
    choices: [{
        text: 'Make sure our systems and master data are updated with the correct customer details.',
        correct: true,

      },
      {
        text: 'Use advanced analytics to identify meaningful cross / up-sell opportunities and communicate potential to the Sales team.',
        correct: true,
      },
      {
        text: `Inform other Customer Service team members by email that you've entered and confirmed the customer's request.`,
        correct: false,
      },
      {
        text: 'After sending an automated order acknowledgement to the customer using their preferred communication channel (i.e. email), make a phone call to them too to make sure they received the order confirmation.',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct and earned a bonus badge!</h2>
        <p>We make sure the data in our systems is correct. </p>
        <p>When we actively seek to deeply understand our customers’ needs and what drives their requests, we may be able to proactively offer solutions that create an enhanced outcome for both Cargill and the customer. For example, using advanced analytics creates opportunities for Vendor Managed Inventory (VMI), allowing us to let our customer know when they should be placing their order, or leveraging the current products or promotions to create up selling or cross selling opportunities.  
        </p>
        <p>All of this is done while working with the customer on the solutions that make sense for their business.</p>`,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Options A and B are correct answers.</h2>
       
        <ul>
          <li>We make sure the data in our systems is correct. </li>
          <li>When we actively seek to deeply understand our customers’ needs and what drives their requests, we may be able to proactively offer solutions that create an enhanced outcome. For example, using advanced analytics creates opportunities for Vendor Managed Inventory (VMI), allowing us to let our customer know when they should be placing their order, or leveraging the current products or promotions to create up-selling or cross-selling opportunities.  All of this is done while working with the customer on the solutions that make sense for their business. </li>
          <li>We should work in an efficient and effective manner. Informing Customer Service team members about the customer's specific requirements is important, but the best way to do that is using the system functionality and ensuring that master data is updated in all applicable systems.
</li>
          <li>Confirming back to the customer is important part of the process, but confirming through the customers' preferred channel is enough, unless there are exceptions or issues that require customer's immediate attention.
</li>
        </ul>`
    }
  },
  {
    type: 'multiple_choice',
    title: 'Order Confirmation',
    question: 'Let’s envision a well-managed customer order management experience. When the customer is ready, their order goes through the intake process with no issues because everything was configured correctly when the account was first set up. Just the way we like it!  Now it’s time for Order Confirmation. What steps do we take to contribute to this seamless experience for our customer?',
    instr: 'Choose the correct options.',
    selected: -1,
    submitted: false,
    choices: [{
        text: 'We advise our customers if we are dealing with internal breakdowns (i.e., plant shutdowns).',
        correct: false,

      },
      {
        text: 'We perform credit checks and actively monitor release of orders on hold. We do this to ensure smooth processing.',
        correct: true,
      },
      {
        text: 'We confirm with CTL (the transportation schedule) to ensure there were no issues with the order request.',
        correct: true,
      },
      {
        text: 'We verify there’s enough volume of product, per their contract/plant inventory.',
        correct: true,
      },
      {
        text: 'We advise the Customer when they are on a credit hold.',
        correct: false,
      },
      {
        text: 'We tell the customer about pricing and costs. They should be kept informed about details like margins.',
        correct: false,
      },
      {
        text: 'We ensure accuracy on everything, from the start, in the system – credit check, contract, order creation. This supports seamless order process allowing for automation of tasks.',
        correct: false,
      },
      {
        text: 'We verify to ensure quality testing timelines are aligned to shipment schedule, where applicable.',
        correct: true,
      },
      {
        text: 'We select the appropriate sourcing location, based on business rules.',
        correct: true,
      },
      {
        text: 'Once the orders are completed, we send an order confirmation to the customer, to keep them informed.',
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>When we work to ensure everything is set up correctly, processed accurately and we connect with key internal partners, where appropriate, to verify important details like inventory availability and transportation schedules, we support seamless customer experiences. </p>
        <p>Keeping our customers informed is critical. As we embrace forward thinking ways, we are using more automated methods. For example, while in the past customers appreciated an email; with our new technology we believe that the system will take care of the confirmation for the customer and they can trust that their order is in process until the date the receive it. Digitalization impacts, like this one, positively influences our customers' perception.
        </p>
        <p>These actions reinforce our value proposition with our Customers to be their choice pick when we deliver what we say we will and meet their expectations, as mutually agreed upon in the SLA to ensure alignment. </p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Options B, C, D, G, H, I, J are correct answers.</h2>
        
        <ul>
          <li>B. We perform credit checks and actively monitor release of orders on hold. We do this to ensure smooth processing.</li>
          <li>C. We confirm with CTL (the transportation schedule) to ensure there were no issues with the order request.</li>
          <li>D. We verify there’s enough volume of product, per their contract/plant inventory.</li>
          <li>G. We ensure accuracy on everything, from the start, in the system – credit check, contract, order creation.</li>
          <li>H. We verify to ensure quality testing timelines are aligned to shipment schedule, where applicable.</li>
          <li>I. We select the appropriate sourcing location, based on business rules.</li>
          <li>J. Once the orders are completed, we send an order confirmation to the customer, to keep them informed!</li>
        </ul>
        <p>We generally want to be careful how and what we share information with our customers, especially when it concerns our internal processes and procedures. It's important to let the customers know if there is any risk for their order, but details about Cargill's plant breakdown is a circumstance we deal with internally. Another example of information sharing we should be mindful of, is pricing details, in which case we should direct the customer to our Commercial team, who can provide the most accurate information as needed.</p>
        <p>When we work to ensure everything is set up correctly, processed accurately and we connect with key internal partners, where appropriate, to verify important details like inventory availability and transportation schedules, we support seamless customer experiences. These actions reinforce our value proposition with our Customers to be their choice pick when we deliver what we say we will and meet their expectations, as mutually agreed upon in the SLA to ensure alignment.</p>`
    }
  },
  {
    type: 'single_choice',
    title: 'Order Processing',
    question: 'Today, we were notified that one of our plants experienced unplanned down time.  You check with your customer and they desperately need the product before the original sourcing plant can provide it.  This is going to require us to act quickly.  What steps should you follow?',
    instr: 'Choose the correct option.',
    selected: -1,
    submitted: false,
    choices: [{
        text: 'Immediately after receiving notification about the plant shutdown, call the customer and inform them we will not be able to deliver their order and cancel the order in the system.',
        correct: false,

      },
      {
        text: 'Agree with planning team that customer can accept a similar product that they have previously ordered, which we can now deliver in a timely manner.',
        correct: false,
      },
      {
        text: 'Agree with the planner that sourcing location can be switched to a warehouse, which is far off the plant. Change the loading location in the system and only inform the customer about it.',
        correct: false,
      },
      {
        text: `You advise your Supply Chain partner,request a sourcing change and ensure the proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed. After we agree on the resolution internally, you confirm expected next steps with the customer`,
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>Following these steps will support our ability to provide a seamless experience for our customer, despite the obstacles. It’s vital to keep your internal partners informed as well. It is important we align internally before updating the customer.You advise your Supply Chain partner,request a sourcing change and ensure the proposed meets all the customer's requirements.</p>
        <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. The correct flow would look like this:</h2>
        <p>You advise your Supply Chain partner and follow the arbitrage process to make sure the sourcing change proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Inform/confirm on the outcome you intend to deliver to the customer is agreed upon internally. It is important we align internally before updating the customer. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed.</p>
       <p>It's important to keep the customer informed on any changes. Before cancelling the order, make sure we have explored all possible alternatives to deliver and meet the customer's expectations. It’s vital to keep your internal partners informed, as well. You advise your Supply Chain partner,request a sourcing change and ensure the proposed meets all the customer's requirements. </p>
       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.
       </p>`,
       incorrect1: `<h2 class='correct'>Good try, but this is incorrect. The correct flow would look like this:</h2>
        <p>You advise your Supply Chain partner and follow the arbitrage process to make sure the sourcing change proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Inform/confirm on the outcome you intend to deliver to the customer is agreed upon internally. It is important we align internally before updating the customer. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed. </p>
       <p>Product changes should always be consulted with our customers, even if we are aware of their ordering patterns. It's not only important to deliver when the customer requested us to do so, but also to deliver exactly what the customer asked for. It’s vital to keep your internal partners informed, as well.You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements.</p>
       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>
       `,
        incorrect2: `<h2 class='correct'>Good try, but this is incorrect. Option D is the correct answer.</h2>
        <p>Informing the customer is correct, but it is also important to validate if that change is doable with the carrier / CTL. It’s vital to keep your internal partners (i.e. CTL) informed as well.You advise your Supply Chain partner,request a sourcing change and ensure the proposed meets all the customer's requirements.</p>
       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>
  
       `
    }
  },
  {
    type: 'single_choice',
    title: 'Order Fulfillment',
    question: 'Unfortunately, we find out that one of our trucks en-route to a customer delivery has a flat tire. The truck carrier contacted CTL to notify them. Since this incident will result in a 2-hour delay before our customer will receive their order, CTL has notified us. What steps should you follow?',
    instr: 'Choose the correct option.',
    selected: -1,
    submitted: false,
    choices: [{
        text: 'Have CTL update the customer when they know when the product will be delivered to them.',
        correct: false,

      },
      {
        text: `Don't do anything. Wait for the customer to call and ask where the truck is, and then provide details about the flat tire.`,
        correct: false,
      },
      {
        text: 'Once you have confirmed with CTL when the product is expected to be delivered, take action to provide an update to the Customer immediately, so they are aware of the change.',
        correct: true,
      },
      {
        text: `Immediately after receiving notification about the truck's flat tire, call the customer to let them know we'll send another truck.`,
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>Always keep the customer informed when the product fulfillment will not meet the expected time so they can know when to expect it. So, once you confirm the delivery, be sure to reach out to the customer with an update on what to expect.</p>
        <p>Also, it’s important that we work across functions as one team and to be proactive. We want to come across to our customers as being 1 Team. CTL and CS teams should collaborate and make sure that we proactively reach out to customers in case of exceptions.</p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Option C is the correct answer.</h2>
        <p>CTL would not update the customer. CSRs are the contact point for customers in case of order or delivery issues.</p>
        <p>The customers should always be proactively informed of any changes and provided assurance that we are working on it and solutions are in progress.</p>
        <p>We should first discuss possible solutions with CTL / the carrier and understand what is best resolution considering customer's urgency and transportation availability. Sending another truck might be a possibility, but it must be aligned with CS's partners in other functions.
</p>`
       }
  },

  {
    type: 'multiple_choice',
    title: 'Order Support',
    question: 'A larger portion of our interaction and intervention is needed in this focus area. We can expect a variety of customer needs to come our way. It could be any one of a thousand reasons, so this area for us is probably the most variation in the Order Support bucket. Select some of the requests we can expect to handle in Order Support.',
    instr: 'Choose the correct options.',
    selected: -1,
    submitted: false,
    choices: [{
        text: 'Receive and answer order / general inquiries about our products',
        correct: true,

      },
      {
        text: 'Process orders rejected or returned by customer',
        correct: true,
      },
      {
        text: 'Process order exceptions and issue escalations',
        correct: true,
      },
      {
        text: 'Make sure customer segmentation rules (where applicable) are properly setup in the system',
        correct: false,
      },
      {
        text: 'Manage Non-Standard Customer documentation requests –(e.g. issue/reissue B/L (Bill of Lading), COA (Certificate of Analysis), invoice)',
        correct: true,
      },
      {
        text: 'Enter customer orders in the system',
        correct: false,
      },
      {
        text: 'Receive invoice disputes',
        correct: true,
      },
      {
        text: 'Receive and process customer complaints',
        correct: true,
      },
      {
        text: 'New Customer – Helping to get them started',
        correct: true,
      },
      {
        text: 'Working with CTL to determine logistics planning',
        correct: false,
      },
      {
        text: 'Identify up sell opportunity and communicate to commercial team',
        correct: false,
      },
      {
        text: 'Work with CTC team to release customer orders that are on hold due to overdue invoices',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct and earned a bonus badge!</h2>
        <p>These are the type of Order Support actions we provide our expertise to contribute towards seamless Order Management experiences for our customers. </p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Options B, C, D, G, H, I, J are correct answers.</h2>
        <p>The Order Support actions we provide our expertise towards include:</p>
        <ul>
          <li>B. Receive and answer order / general inquiries about our products</li>
          <li>C. Process orders rejected or returned by customer</li>
          <li>D. Process order exceptions and issue escalations</li>
          <li>G. Manage Non-Standard Customer documentation requests –(e.g. issue/reissue B/L (bill of lading),
     COA (certificate of analysis), invoice)</li>
          <li>H. Receive invoice disputes</li>
          <li>I. Receive and process customer complaints</li>
          <li>J. New Customer – Helping to get them started</li>
        </ul>`
         }
  },
];
