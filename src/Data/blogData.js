export const blogImages = {
  blog1: "../../../src/assets/clients/blog1Happy_Hol.jpg",
  blog2: "../../../src/assets/clients/Gerard_D_Nerval_(4).jpg",
  blog3: "../../../src/assets/clients/Copy_of_tis_teason_to_be_(1).jpg",
  blog4: "../../../src/assets/clients/Travel_Enquire_(1).jpg",
  blog5: "../../../src/assets/clients/Add_a_heading_(1).jpg",
  blog6: "../../../src/assets/clients/livetour_features.jpg",
};

// Sample comments data
export const sampleComments = [
  {
    id: 1,
    author: 'John Smith',
    avatar: "../../../src/assets/clients/blog1Happy_Hol.jpg",
    date: '2 hours ago',
    content: 'Great article! The insights about tour management are really valuable. We\'ve been considering implementing something similar in our tour company.',
    likes: 12,
    replies: [
      {
        id: 11,
        author: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        date: '1 hour ago',
        content: 'Thanks John! I\'d be happy to discuss implementation strategies. Feel free to reach out.',
        likes: 5
      }
    ]
  },
  {
    id: 2,
    author: 'Maria Garcia',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
    date: '5 hours ago',
    content: 'The section on itinerary building is particularly interesting. Do you have any recommendations for specific features that work well with tour management systems?',
    likes: 8,
    replies: []
  },
  {
    id: 3,
    author: 'David Wilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    date: '1 day ago',
    content: 'This is exactly what we needed to read. Our current system is outdated and we\'re looking for modern solutions. The features you mentioned are impressive!',
    likes: 15,
    replies: []
  }
];

// Main blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "Create Travel Packages With LivetourPRO",
    image: blogImages.blog1,
    author: "LivetourPRO Team",
    date: "Feb 17, 2020",
    views: "2.3k",
    comments: "0",
    readTime: "7 min read",
    fullContent: `
<p class='text-[18px] text-black'>Tour operators need a strong application to maintain their database as well as create itineraries in a matter of moments. Pioneers of LivetourPRO claim to have developed just what the operators are looking for. An application to ease the burden of bookings and reservations. Livetour is a holistic approach to the problem faced by traditional travel agents. This travel management and automation application come as a blessing for tour companies across the country. Organizing the travel business has become faster and smarter using Livetour. From managing travel itineraries including arrivals and departures, hotel reservation and other information regarding travel, Livetour is a customized tour organizer.</p>
<p class='text-[18px] text-black'>Let's take a quick look into some of the features that make LivetourPRO an industry first. Any client will require to follow up process for a successful tour. There are many options available to record the progress of the enquiry. The follow-up section comes with this ability to take the enquiry forward according to the comfort of the client. The following are the options available for the follow up of any enquiry.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Drafted Itineraries</h3>
<p class='text-[18px] text-black'>Once an enquiry is processed with mailing the itinerary created according to the demands of the client, the enquiry is listed under drafted itinerary available under the follow-ups section. This section comes with the following actions, Update enquiry, close enquiry, view edited versions and feedback.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Follow Up Sections</h3>
<p class='text-[18px] text-black'>The follow-up date is recorded under the guest info section in the itinerary builder. According to the date set, there are three sections where it will be listed. They are today's follow up, upcoming follow-up and outdated follow up. It is included to ease the burden of travel executives to differentiate between spam enquiries and genuine enquiries. Some clients may require regular planning and interaction to finalize the tour itinerary and quote.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Today's Follow Up</h3>
<p class='text-[18px] text-black'>This section lists the enquiries with the follow-up date stated on the day of recording the enquiry. When the date is set to the current date, the executives follow up the client enquiry on that day itself. This helps executives organize the enquiries daily which is the first and foremost responsibility in building a good database of clients. Further actions that are possible from here are update, close, view edited versions and feedback.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Upcoming Follow-Up</h3>
<p class='text-[18px] text-black'>When the date of follow up is set to a date in the future, the enquiry is listed under upcoming follow up. This can be later processed just like any other enquiry. It may sometimes require the customer that he/she may be busy at the present date. This feature helps the travel agent schedule the enquiry for a later date. It is set to coax the customers to travel at their available dates and not compelling them to take a holiday at the earliest. This can also help clients travel cheaper in case the dates are fixed for the future. The actions taken from this section is updated, close, view edited versions and feedback.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Outdated Follow-Up</h3>
<p class='text-[18px] text-black'>Once the enquiry is updated, it moves to the outdated follow-up section. This helps the travel agent organize the enquiries that are recorded. This list of outdated follow up has the enquiries that were decided to be processed but could not be converted into leads. The list of enquiries may be discarded from time to time. The following actions are possible with this section: update, close, view edited versions and feedback.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Converted Leads</h3>
<p class='text-[18px] text-black'>Upon successful planning, the probable clients are listed under converted leads. This action is undertaken from the itinerary builder section. Once the itinerary is saved and previewed, it is mailed to the client along with the cost details. This list helps the executive to decide upon the package and finalize the trip. The actions enabled are update and view edited versions.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Closed Enquiries</h3>
<p class='text-[18px] text-black'>Closed enquiries may be spam or unwanted enquiries. The enquiry is closed from the latest enquiry section when a new enquiry is sent to the tour operator. Also, the close enquiry option is available with the follow-up tabs whenever an enquiry is noticed to be spam or unlikely to be converted to leads. It can be deleted completely from the list or moved to the follow-up section later.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Conclusion</h3>
<p class='text-[18px] text-black'>These are just a few of the many customer-friendly features incorporated into LivetourPRO. Tour executives can work around the features and customize it to their wish and fancy. Livetour promises better customer relationship management. It takes just a few minutes to build an itinerary whereas traditionally it took travel executives days to arrange a budget tour.</p>
    `
  },
  {
    id: 2,
    title: "Follow Up Customers With LivetourPRO",
    image: blogImages.blog2,
    author: "LivetourPRO Team",
    date: "Feb 15, 2020",
    views: "1.8k",
    comments: "0",
    readTime: "6 min read",
    fullContent: `
<p class='text-[18px] text-black'>Tour operators need a strong application to maintain their database as well as create itineraries in a matter of moments. Pioneers of LivetourPRO claim to have developed just what the operators are looking for. An application to ease the burden of bookings and reservations. Livetour is a holistic approach to the problem faced by traditional travel agents. This travel management and automation application come as a blessing for tour companies across the country. Organizing the travel business has become faster and smarter using Livetour. From managing travel itineraries including arrivals and departures, hotel reservation and other information regarding travel, Livetour is a customized tour organizer.</p>
<p class='text-[18px] text-black'>Let's take a quick look into some of the features that make LivetourPRO an industry first. Any client will require to follow up process for a successful tour. There are many options available to record the progress of the enquiry. The follow-up section comes with this ability to take the enquiry forward according to the comfort of the client. The following are the options available for the follow up of any enquiry.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Drafted Itineraries</h3>
<p class='text-[18px] text-black'>Once an enquiry is processed with mailing the itinerary created according to the demands of the client, the enquiry is listed under drafted itinerary available under the follow-ups section. This section comes with the following actions, Update enquiry, close enquiry, view edited versions and feedback.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Follow Up Sections</h3>
<p class='text-[18px] text-black'>The follow-up date is recorded under the guest info section in the itinerary builder. According to the date set, there are three sections where it will be listed. They are today's follow up, upcoming follow-up and outdated follow up. It is included to ease the burden of travel executives to differentiate between spam enquiries and genuine enquiries. Some clients may require regular planning and interaction to finalize the tour itinerary and quote.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Today's Follow Up</h3>
<p class='text-[18px] text-black'>This section lists the enquiries with the follow-up date stated on the day of recording the enquiry. When the date is set to the current date, the executives follow up the client enquiry on that day itself. This helps executives organize the enquiries daily which is the first and foremost responsibility in building a good database of clients. Further actions that are possible from here are update, close, view edited versions and feedback.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Upcoming Follow-Up</h3>
<p class='text-[18px] text-black'>When the date of follow up is set to a date in the future, the enquiry is listed under upcoming follow up. This can be later processed just like any other enquiry. It may sometimes require the customer that he/she may be busy at the present date. This feature helps the travel agent schedule the enquiry for a later date. It is set to coax the customers to travel at their available dates and not compelling them to take a holiday at the earliest. This can also help clients travel cheaper in case the dates are fixed for the future. The actions taken from this section is updated, close, view edited versions and feedback.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Outdated Follow-Up</h3>
<p class='text-[18px] text-black'>Once the enquiry is updated, it moves to the outdated follow-up section. This helps the travel agent organize the enquiries that are recorded. This list of outdated follow up has the enquiries that were decided to be processed but could not be converted into leads. The list of enquiries may be discarded from time to time. The following actions are possible with this section: update, close, view edited versions and feedback.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Converted Leads</h3>
<p class='text-[18px] text-black'>Upon successful planning, the probable clients are listed under converted leads. This action is undertaken from the itinerary builder section. Once the itinerary is saved and previewed, it is mailed to the client along with the cost details. This list helps the executive to decide upon the package and finalize the trip. The actions enabled are update and view edited versions</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Closed Enquiries</h3>
<p class='text-[18px] text-black'>Closed enquiries may be spam or unwanted enquiries. The enquiry is closed from the latest enquiry section when a new enquiry is sent to the tour operator. Also, the close enquiry option is available with the follow-up tabs whenever an enquiry is noticed to be spam or unlikely to be converted to leads. It can be deleted completely from the list or moved to the follow-up section later.</p>
<h3 class="text-xl font-semibold mt-6 mb-2 text-red-600">Conclusion</h3>
<p class='text-[18px] text-black'>These are just a few of the many customer-friendly features incorporated into LivetourPRO. Tour executives can work around the features and customize it to their wish and fancy. Livetour promises better customer relationship management. It takes just a few minutes to build an itinerary whereas traditionally it took travel executives days to arrange a budget tour.</p>
    `
  },
  {
    id: 3,
    title: "Build The Best Itinerary With LivetourPRO Itinerary Builder",
    image: blogImages.blog3,
    author: "LivetourPRO Team",
    date: "Feb 14, 2020",
    views: "3.1k",
    comments: "0",
    readTime: "10 min read",
    fullContent: `
<p class='text-[18px] text-black'>The itinerary building is a herculean task for tour organizers. It takes days to get the tour in shape. When there are changes in reservations, it will be a burden for the planners and in turn, affect the sales and the image of the operators. This is where the role of booking reservation systems come into play. It makes the task easier for the executives while presenting a well-knitted tour customized to your taste and requirements. Presenting an interesting itinerary is the first step to convert enquiries to leads. This is where Livetour keeps the promise of being a record-breaking innovation for tour operators.</p>
<p class='text-[18px] text-black'>LivetourPRO is a complete medley of features helping the tour organizer craft the perfect itinerary. One major feature is the itinerary builder that puts together the destination, properties, vehicles, and houseboat cruises at custom prices helping the client decide every detail regarding the tour. An itinerary can be built in two ways, one through the itinerary builder button and another through the convert to lead option available in the latest enquiry section. Either way, the itinerary is built on all important info available for personal as well as the tour.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Itinerary Builder</h3>
<p class='text-[18px] text-black'>The itinerary builder comes with the following features</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Guest Info</h3>
<p class='text-[18px] text-black'>This is the first tab for the details. The form displayed contains details such as personal details, arrival and departure cities and dates, follow up dates, package name, details, and agents. Upon saving the itinerary details are recorded on the page for the itinerary builder. Important information like destination, dates, ticket details, custom price, properties, vehicles, and cruises are collected from this page. These details can be added at a custom price or with the ticket ranges provided by the executive.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Date Range</h3>
<p class='text-[18px] text-black'>This represents the tour date. By simply selecting the dates, the destination and property details are added. Property details can be added in the form displayed while selecting the destination. All details regarding hotel reservation and room details along with package details are easily added together with the total cost. It displays the property details as saved in the database along with the pricing and room facilities and amenities. The last day itinerary specifies the details of the last day of the tour.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Margins</h3>
<p class='text-[18px] text-black'>This option sets the profit margin as decided by the property owners and the offer prices available. This is displayed in the invoice that is finally issued to the client. It helps in calculating the total cost and giving reliable reductions and discounts for the customer as well as service providers.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-4 mb-2">Save And Preview</h3>
<p class='text-[18px] text-black'>Finally, you are ready with the itinerary. You can save the itinerary and view it before mailing it to the client. This helps avoid any discrepancy in the itinerary. The itinerary will be complete with images of destination as well as a detailed description of the tourist attractions based on the destinations visited on each day of the tour including the total costs and hotel reservation, vehicles and cruises if any.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Send Email</h3>
<p class='text-[18px] text-black'>Finally, on sending the mail, the enquiry is listed under today's follow up section in the follow-up page. The follow-up page records the enquiries that are to be processed daily. There are many options available according to the date entered in guest info. If the date is set for the same date as that of the emailed itinerary, it comes under today's follow up, if not, it may go to upcoming follow up, outdated follow-up, converted enquiries or closed enquiries based on the action taken.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Convert To Package</h3>
<p class='text-[18px] text-black'>Converting the enquiry to a package, this feature lists the enquiry in the follow-up page. The result is the display of package details with information on the package bookings, payment information, vouchers and invoices and property and vehicle details. Bookings regarding properties can be sent to the operators through the mail while customers get the mail regarding vouchers and invoices. Package information includes package details, customer details and other details like the GST as well as payment to suppliers. This is the final step that seals the customer for a tour.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Final Words</h3>
<p class='text-[18px] text-black'>There are many features still to be customized that make travel automation with LivetourPRO a success. This is one feature where an itinerary can be built in a matter of moments. Every time a new customer has to be given an itinerary, building it from scratch is done with expertise and truly professional. There is an unending list of features that set Livetour apart from the rest.</p>
    `
  },
  {
    id: 4,
    title: "Manage Tour Enquiries Easily With LivetourPRO",
    image: blogImages.blog4,
    author: "LivetourPRO Team",
    date: "Feb 13, 2020",
    views: "1.5k",
    comments: "0",
    readTime: "7 min read",
    fullContent: `
<p class='text-[18px] text-black'>When using new software like those by tour organizers, there is a tendency to promote their usefulness as well as highlight their benefits without knowing the challenges they are set to face. The problem many companies face is that the software suits only a type of work, industry or organization. Thus it is up to the company to adjust its business to use the software properly. In the case of Livetour, this is no major issue as it is developed and tailored to the needs of tour operators. This booking reservation software is the need of the hour with a major increase in the number of travelers swelling each day.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">The Manage Enquiries Feature Of LivetourPRO</h3>
<p class='text-[18px] text-black'>This feature adds to the disciplined enquiries section of the LivetourPRO application. It has mainly four tabs named latest enquiries, unprocessed enquiries, processed enquiries, and closed enquiries. All of these tabs help the tour operator get an idea of the client's requirements. This is the first and foremost section used at the beginning of the communication with the client about the tour details. It all starts with the add enquiry button on the manage enquiries page with a tab called latest enquiries bringing you to a form with the details to be added like personal info, tour dates and arrival, and departure cities, number of travelers and the destination, enquiry date, and reminder. On completing the form, the enquiry is listed under the latest enquiry section.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Latest Enquiry Section</h3>
<p class="text-gray-800 text-[18px] mb-4">This section lists the enquiries added by the add enquiry button. The enquiry listed under this section is subject to the following actions:</p>
<ul class="list-disc pl-5 space-y-2 text-[18px] text-gray-800">
<li><strong>Close enquiry:</strong> In case the enquiry is not genuine, the admin can close the enquiry then and there. No further operations are possible for this enquiry.</li>
<li><strong>Send quote/assign:</strong> This section is used to send the quote of the tour and also to assign the follow up to the travel executives who will be communicating the details to the traveler.</li>
<li><strong>Convert to new lead:</strong> In case the enquiry proceeds to booking, the assigned executive can send the itinerary through this section and eventually convert it to the new lead.</li>
<li><strong>Remarks:</strong> Adding remarks is important in case the client has requirements like dietary restrictions or any other specifications.</li>
</ul>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Unprocessed Enquiry</h3>
<p class='text-[18px] text-black'>On assigning the enquiry to a travel executive, it moves to the unprocessed enquiry section. The enquiry then moves to the account of the executive from the admin. Once listed below unprocessed enquiry, it can take the following actions</p>
<p class='text-[18px] text-black'>Actions</p>
<ul class="list-disc pl-5 space-y-2 text-[18px] text-gray-800">
<li><p class='text-black'>Delete:</p> The whole enquiry can be deleted once there is no response or when identifying it as a spam enquiry. The whole enquiry details are erased from the database.</li>
<li><strong>Enquiry details /assign:</strong> This section makes editing easy for the assigned executive. A popup with the enquiry details is displayed. The executive can be intimidated by assigning from this section also.</li>
<li><strong>Remarks:</strong> Helps jot down any suggestions or reminders to help the other executives take a detailed study about any matter.</li>
</ul>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Processed Enquiry</h3>
<p class='text-[18px] text-black'>The enquiries listed under this section are already processed using the convert to lead action available with the latest enquiry section. The convert to lead action takes the executive to the itinerary builder section. On saving the itinerary with details about the property, vehicle and houseboat cruises available, the enquiry moves to the processed enquiry section. Here the following actions await the executive.</p>
<ul class="list-disc pl-5 space-y-2 text-[18px] text-gray-800">
<li><p class='text-black'>Enquiry details:</p> This action helps the executive to view the itinerary details and view the status of the quote, whether it is sent or not.</li>
<li><strong>View itinerary:</strong> Viewing the itinerary is enabled from this selection. It redirects to the itinerary builder page to make any last-minute changes to the tour in case there are some discrepancies in the reservations.</li>
<li><strong>Remark</strong> Recording any comments from the client to be noted while planning the tour.</li>
</ul>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Closed Itinerary</h3>
<p class='text-[18px] text-black'>Just as the name suggests, the enquiry can be closed once there is no proeeding in the communication. The enquiry is closed from the latest enquiry page but listed under the closed enquiry tab. No further action is possible regarding a closed enquiry.</p>
<p class='text-[18px] text-black'>Actions</p>
<ul class="list-disc pl-5 space-y-2 text-[18px] text-gray-800">
<li><p class='text-black'>Delete:</p> The enquiry can be completely deleted to keep it from interfering with other enquiries. This makes the database lighter without unnecessary additions.</li>
<li><strong>Enquiry details:</strong> This helps in just browsing through the enquiry details to not duplicate the details or to keep an account of spam enquiries.</li>
<li><strong>Remarks:</strong> Helps jot down any suggestions or reminders to help the other executives take a detailed study about any matter.</li>
</ul>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">A Final Word About LivetourPRO</h3>
<p class='text-[18px] text-black'>The enquiry management feature of LivetourPRO is essentially the best amongst all the travel management software and hence the question of credibility does not stand a chance when it is implemented. This feature takes travel automation to its zenith, linking all necessary data to build a good itinerary in simple terms and quickly.</p>
    `
  },
  {
    id: 5,
    title: "Travel Technology Companies And Online Travel Business",
    image: blogImages.blog5,
    author: "Livetour Team",
    date: "Oct 17, 2019",
    views: "1.5k",
    comments: "0",
    readTime: "6 min read",
    fullContent: `
<p class='text-[18px] text-black'>Travel companies are competing with each other to bring the best services to travelers. Getting the whole process of booking and reservation automated helps reduce the burden of paperwork for the company. This is why tour management systems are in high demand. A good travel company gives you a detailed itinerary and lets you have an insight into how much you will be spending and what facilities will be provided. Livetour is not just any other software, but surely it has made a mark of its own in the travel technology industry. The software is as robust as it should be providing the best solution regarding bookings, reservations, agent management and all the aspects related to organizing a trip</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Resource Management In LivetourPRO: A Feature Beyond Words</h3>
<p class='text-[18px] text-black'>LivetourPRO has a good resource management feature that helps manage agents, vehicles, hotels, houseboats and even more within minutes. It lets the travel company schedule the agents by season and rates. You get the quotes within minutes and there is no fumbling around with the contract. It is all done in a matter of seconds. The software is well approved by a wide range of travel companies. It all starts with the add enquiry button on the manage enquiries page with a tab called latest enquiries bringing you to a form with the details to be added like personal info, tour dates and arrival, and departure cities, number of travelers and the destination, enquiry date, and reminder. On completing the form, the enquiry is listed under the latest enquiry section.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Get A Schedule Of Properties</h3>
<p class="text-gray-800 text-[18px] mb-4">You can manage your properties with the seasonal rates as bulk or individually. This makes it easy for you to get the contracts with agents quickly</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Manage Vehicles With Their Pricing</h3>
<p class="text-gray-800 text-[18px] mb-4">Livetour enables vehicle management with its price calculation. The system gives an automatic price calculation in the itinerary builder.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Get Your Best Quote With The Agent</h3>
<p class="text-gray-800 text-[18px] mb-4">Agent management is an issue that every tour company faces. The company must make sure every agent is taken into consideration along with the transactions and debit and credit details</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Get Your Best Quote With The Agent</h3>
<p class="text-gray-800 text-[18px] mb-4">Agent management is an issue that every tour company faces. The company must make sure every agent is taken into consideration along with the transactions and debit and credit details</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Manage Houseboats Within A Snap</h3>
<p class="text-gray-800 text-[18px] mb-4">Houseboats are a vital inclusion in all the tour packages. Managing them poses a major hurdle in arranging tours. With the resource management feature, LivetourPRO makes this as simple as a child's play. The rates are displayed in the itinerary builder.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">LivetourPRO: A Jack Of All Trades</h3>
<p class="text-gray-800 text-[18px] mb-4">With LivetourPRO, you have a strong grasp over your business with records on all aspects. Be it resource management or CRM services, there is no place for any flaw. Your business is made as professional as it can be with the best software solution. With prompt customer service, Livetour is the answer to all your business needs keeping a record of whatever customer queries come your way.</p>
    `
  },
  {
    id: 6,
    title: "An Overview Of Features In LivetourPRO",
    image: blogImages.blog6,
    author: "LivetourPRO Team",
    date: "Jun 30, 2016",
    views: "1.5k",
    comments: "0",
    readTime: "7 min read",
    fullContent: `
<p class='text-[18px] text-black'>Travel companies are competing with each other to bring the best services to travelers. Getting the whole process of booking and reservation automated helps reduce the burden of paperwork for the company. This is why tour management systems are in high demand. A good travel company gives you a detailed itinerary and lets you have an insight into how much you will be spending and what facilities will be provided. LivetourPRO is not just any other software, but surely it has made a mark of its own in the travel technology industry. The software is as robust as it should be providing the best solution regarding bookings, reservations, agent management and all the aspects related to organizing a trip.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Resource Management In LivetourPRO: A Feature Beyond Words</h3>
<p class='text-[18px] text-black'>LivetourPRO has a good resource management feature that helps manage agents, vehicles, hotels, houseboats and even more within minutes. It lets the travel company schedule the agents by season and rates. You get the quotes within minutes and there is no fumbling around with the contract. It is all done in a matter of seconds. The software is well approved by a wide range of travel companies.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Get A Schedule Of Properties</h3>
<p class="text-gray-800 text-[18px] mb-4">You can manage your properties with the seasonal rates as bulk or individually. This makes it easy for you to get the contracts with agents quickly.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Manage Vehicles With Their Pricing</h3>
<p class="text-gray-800 text-[18px] mb-4">LivetourPRO enables vehicle management with its price calculation. The system gives an automatic price calculation in the itinerary builder.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Get Your Best Quote With The Agent</h3>
<p class="text-gray-800 text-[18px] mb-4">Agent management is an issue that every tour company faces. The company must make sure every agent is taken into consideration along with the transactions and debit and credit details</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">Manage Houseboats Within A Snap</h3>
<p class="text-gray-800 text-[18px] mb-4">Houseboats are a vital inclusion in all the tour packages. Managing them poses a major hurdle in arranging tours. With the resource management feature, LivetourPRO makes this as simple as a child's play. The rates are displayed in the itinerary builder.</p>
<h3 class="text-[24px] font-semibold text-red-600 mt-6 mb-2">LivetourPRO: A Jack Of All Trades</h3>
<p class="text-gray-800 text-[18px] mb-4">With LivetourPRO, you have a strong grasp over your business with records on all aspects. Be it resource management or CRM services, there is no place for any flaw. Your business is made as professional as it can be with the best software solution. With prompt customer service, LivetourPRO is the answer to all your business needs keeping a record of whatever customer queries come your way.</p>
    `
  },
];

// Blog tags for filtering and categorization
export const blogTags = [
  'LivetourPRO',
  'Travel Management',
  'Tour Packages',
  'CRM',
  'Automation',
  'Itinerary Builder',
  'Resource Management',
  'Travel Technology',
  'Customer Follow-up',
  'Tour Operations'
];

// Social sharing platforms configuration
export const socialPlatforms = [
  { name: 'Facebook', icon: 'Facebook', color: 'text-blue-600', key: 'facebook' },
  { name: 'Twitter', icon: 'Twitter', color: 'text-blue-400', key: 'twitter' },
  { name: 'LinkedIn', icon: 'Linkedin', color: 'text-blue-700', key: 'linkedin' },
  { name: 'Copy Link', icon: 'Link', color: 'text-gray-600', key: 'copy' },
];