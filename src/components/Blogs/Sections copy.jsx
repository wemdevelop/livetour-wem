import React, { useState } from 'react';
import { Search, Filter, Calendar, TrendingUp, Star } from 'lucide-react';
import BlogCard from './BlogsCard';
import ScrollSlideRight from '../ui/ScrollSlideRight';
import ScrollSlideLeft from '../ui/ScrollSlideLeft';

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Create Travel Packages With Livetour",
      excerpt: "Managing a successful travel business requires automation. Learn how Livetour helps streamline package creation, payments, and confirmations.",
      content: `
Managing a successful business is a herculean task as it offers to manage various resources at a time. This is where automation comes to your help. When automating, the ultimate aim is easing the burden of work and finding a solution for the hard tasks associated. The latest addition is paperless offices where it is fully automated. Travel companies are the ones in the dire necessity of automation. Arranging itineraries and maintaining bookings and reservations are the hurdles they have to face daily.
Upon mailing the itinerary and quote to the client, the executive moves forward to get the package details processed. This helps the executive finalize the details and mail the invoice and voucher.
The packages page is displayed along with the package information, payment information, property/vehicle information, bookings, invoices, and vouchers.
From this page, the invoice, voucher and booking, and confirmation emails are sent to the client.
**Pending Reservation List**
On mailing the invoice, the enquiry moves to the pending reservation list. The actions possible are edit package, view package, driver information, payment information, and feedback.
While you can view and edit the package from this page, the main use is completing the payment action to manage the accounts.
Moving to the payment information section, the mode of payment and bank details are completed. The enquiry is then subject to confirmation.
The confirmation is done through the manage the accounts section. This section records the invoice under payment approvals. On clicking the action button, it moves to the income and expenses section under manage accounts. On successfully adding the income, the package gets confirmed.
The package is marked as confirmed with a tick mark and a receipt icon.
On successfully mailing the receipt, it moves to the confirmed package section.
**Confirmed Package List**
Upon mailing the receipt to the client, the package moves to a confirmed package list. There are actions in this section that helps close, edit and verify the package.
**Canceled Package List**
In case the client withdraws from the tour plan, it can be moved to the canceled package list. This option comes from the view package page where there is an option to cancel the whole package or the property and vehicle. Once canceled no further action is possible.
**Closed Package List**
After confirmation, the package can be closed upon the successful completion of the tour procedure. This helps the executives to mark the successful leads. The whole tour planning comes to a smooth end.
**The Bottom Line**
Livetour is a comprehensive approach to travel automation. It brings together the various functions involved in the tour planning. It helps tour agents with booking reservation management as well as with the main hurdle that is planning the itinerary. With Livetour, there is no space for worry and everything is planned and executed professionally with the help of the application. Get your Livetour customization for the travel planner and take your business forward. In a competitive market like the current one, the ultimate CRM is the one which holds the business strong past the currents of a huge rush.
    `,
      image: "../../../src/assets/clients/blog1Happy_Hol.jpg",
      author: "Livetour Team",
      date: "Feb 17, 2020",

      views: "2.3k",
      comments: "0",
      readTime: "7 min read"
    },
    {
      id: 2,
      title: "Follow Up Customers With Livetour",
      excerpt: "Tour operators need a strong application to maintain their database and create itineraries in minutes. Livetour makes it effortless to follow up with customers and manage leads efficiently.",
      image: "../../../src/assets/clients/Gerard_D_Nerval_(4).jpg",
      author: "Livetour Team",
      date: "Feb 15, 2020",

      views: "1.8k",
      comments: "0",
      readTime: "6 min read",
      fullContent: `
        <h2 class="text-2xl font-bold mb-4">Follow Up Customers With Livetour</h2>
        <p><strong>0 comments</strong></p>
        <p><strong>Livetour Team</strong></p>
        <p><strong>Posted on: 15 Feb 2020</strong></p>
        <p>Tour operators need a strong application to maintain their database as well as create itineraries in a matter of moments. Pioneers of Livetour claim to have developed just what the operators are looking for. An application to ease the burden of bookings and reservations...</p>
        <h3 class="text-xl font-semibold mt-6 mb-2">Drafted Itineraries</h3>
        <p>Once an enquiry is processed... actions like update enquiry, close enquiry, view edited versions and feedback.</p>
        <h3 class="text-xl font-semibold mt-6 mb-2">Follow Up Sections</h3>
        <ul class="list-disc ml-6">
          <li><strong>Today's Follow-Up:</strong> Enquiries due for today with options to update, close, view versions, and give feedback.</li>
          <li><strong>Upcoming Follow-Up:</strong> Scheduled enquiries for future dates to help customers plan conveniently.</li>
          <li><strong>Outdated Follow-Up:</strong> Missed or outdated enquiries that weren't converted, used for organization or discarding.</li>
        </ul>
        <h3 class="text-xl font-semibold mt-6 mb-2">Converted Leads</h3>
        <p>Upon successful planning... the trip is finalized from here.</p>
        <h3 class="text-xl font-semibold mt-6 mb-2">Closed Enquiries</h3>
        <p>Spam or unwanted enquiries are marked as closed. They can be deleted or moved later.</p>
        <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
        <p>Livetour streamlines customer engagement. Executives can customize their workflow easily, resulting in faster and smarter CRM operations.</p>
      `
    },
    {
      id: 3,
      title: "Build The Best Itinerary With Livetour Itinerary Builder",
      excerpt: "Discover how Livetour's powerful itinerary builder can simplify tour planning and streamline operations for travel agencies.",
      image: "../../../src/assets/clients/Copy_of_tis_teason_to_be_(1).jpg",
      author: "Livetour Team",
      date: "Feb 14, 2020",

      views: "3.1k",
      comments: "0",
      readTime: "10 min read",
      fullContent: `
        <h2 class="text-2xl font-bold mb-4">Build The Best Itinerary With Livetour Itinerary Builder</h2>
        <p><strong>0 comments</strong></p>
        <p><strong>Livetour Team</strong></p>
        <p><strong>Posted on: 14 Feb 2020</strong></p>
        <p>The itinerary building is a herculean task for tour organizers. It takes days to get the tour in shape. When there are changes in reservations, it will be a burden for the planners and in turn, affect the sales and the image of the operators...</p>
        <h3 class="text-xl font-semibold mt-6 mb-2">Itinerary Builder</h3>
        <p>Livetour is a complete medley of features helping the tour organizer craft the perfect itinerary. One major feature is the itinerary builder that puts together the destination, properties, vehicles, and houseboat cruises at custom prices helping the client decide every detail regarding the tour.</p>
        <p>It can be built in two ways: through the itinerary builder button or via the convert to lead option available in the latest enquiry section.</p>
        <h4 class="text-lg font-medium mt-4 mb-2">Guest Info</h4>
        <p>This form includes personal details, arrival/departure info, package name, and agent details. Upon saving, the itinerary is recorded for editing and processing.</p>
        <h4 class="text-lg font-medium mt-4 mb-2">Date Range</h4>
        <p>This sets the tour date range and links destination and property details. Hotels, rooms, and total costs are calculated with saved pricing and amenities.</p>
        <h4 class="text-lg font-medium mt-4 mb-2">Margins</h4>
        <p>Profit margins are configured here, which are reflected in the invoice. It helps calculate discounts for clients and profits for operators.</p>
        <h4 class="text-lg font-medium mt-4 mb-2">Save And Preview</h4>
        <p>Once the itinerary is complete, it can be previewed before being sent. It includes images, day-wise plans, cost breakdowns, and all essential details.</p>
        <h4 class="text-lg font-medium mt-4 mb-2">Send Email</h4>
        <p>On sending the mail, the enquiry enters the follow-up workflow. Depending on the date, it will be listed under today's, upcoming, or outdated follow-ups.</p>
        <h4 class="text-lg font-medium mt-4 mb-2">Convert To Package</h4>
        <p>This final step converts an enquiry into a full package including booking, payment info, vouchers, invoices, and supplier communication. It seals the customer's tour journey.</p>
        <h3 class="text-xl font-semibold mt-6 mb-2">Final Words</h3>
        <p>Livetour allows professional, customized itinerary building in minutes. It is a comprehensive tool that simplifies travel planning with features that truly set it apart from the rest.</p>
      `
    },
    {
      id: 4,
      title: "Manage Tour Enquiries Easily With Livetour",
      excerpt: "Explore how Livetour's enquiry management feature streamlines communication and helps travel operators handle leads with precision and ease.",
      image: "../../../src/assets/clients/Travel_Enquire_(1).jpg",
      author: "Livetour Team",
      date: "Feb 13, 2020",

      views: "1.5k",
      comments: "0",
      readTime: "7 min read",
      fullContent: `
        <h2 class="text-2xl font-bold mb-4">Manage Tour Enquiries Easily With Livetour</h2>
        <p><strong>0 comments</strong></p>
        <p><strong>Livetour Team</strong></p>
        <p><strong>Posted on: 13 Feb 2020</strong></p>
        <p>When using new software like those by tour organizers, there is a tendency to promote their usefulness as well as highlight their benefits without knowing the challenges they are set to face. The problem many companies face is that the software suits only a type of work, industry or organization. Thus it is up to the company to adjust its business to use the software properly. In the case of Livetour, this is no major issue as it is developed and tailored to the needs of tour operators. This booking reservation software is the need of the hour with a major increase in the number of travelers swelling each day.</p>
        <h3 class="text-xl font-semibold mt-6 mb-2">The Manage Enquiries Feature Of Livetour</h3>
        <p>This feature adds to the disciplined enquiries section of the Livetour application. It has mainly four tabs: <strong>latest enquiries</strong>, <strong>unprocessed enquiries</strong>, <strong>processed enquiries</strong>, and <strong>closed enquiries</strong>. All of these tabs help the tour operator get an idea of the client's requirements.</p>
        <h4 class="text-lg font-medium mt-4 mb-2">Latest Enquiry Section</h4>
        <p>This section begins with the <em>Add Enquiry</em> button. After filling a form with personal info, travel dates, and preferences, the enquiry gets listed under this section.</p>
        <p><strong>Actions:</strong></p>
        <ul class="list-disc ml-6">
          <li><strong>Close enquiry:</strong> Instantly closes spam or irrelevant enquiries.</li>
          <li><strong>Send quote / assign:</strong> Assigns follow-up responsibility to executives.</li>
          <li><strong>Convert to lead:</strong> Proceeds the enquiry to booking and moves it to the itinerary builder.</li>
          <li><strong>Remarks:</strong> Notes customer-specific needs like dietary restrictions.</li>
        </ul>
        <h4 class="text-lg font-medium mt-4 mb-2">Unprocessed Enquiry</h4>
        <p>Once an enquiry is assigned, it moves here. Actions include:</p>
        <ul class="list-disc ml-6">
          <li><strong>Delete:</strong> Remove the enquiry completely.</li>
          <li><strong>Enquiry details / assign:</strong> View and manage the enquiry, or reassign.</li>
          <li><strong>Remarks:</strong> Note key client preferences or details.</li>
        </ul>
        <h4 class="text-lg font-medium mt-4 mb-2">Processed Enquiry</h4>
        <p>Enquiries that proceed through the itinerary builder appear here. Actions include:</p>
        <ul class="list-disc ml-6">
          <li><strong>Enquiry details:</strong> Check itinerary status and quote delivery.</li>
          <li><strong>View itinerary:</strong> Preview and edit the planned itinerary.</li>
          <li><strong>Remarks:</strong> Add additional client feedback or changes.</li>
        </ul>
        <h4 class="text-lg font-medium mt-4 mb-2">Closed Itinerary</h4>
        <p>Enquiries that no longer proceed are closed. These appear in this tab.</p>
        <ul class="list-disc ml-6">
          <li><strong>Delete:</strong> Permanently remove from database.</li>
          <li><strong>Enquiry details:</strong> View the closed enquiry summary.</li>
          <li><strong>Remarks:</strong> Store insights for future reference or review.</li>
        </ul>
        <h3 class="text-xl font-semibold mt-6 mb-2">A Final Word About Livetour</h3>
        <p>The enquiry management feature of Livetour is one of the best in the travel CRM space. It empowers tour operators with speed, clarity, and structured workflows — ensuring no lead is missed, and every potential client is properly handled. This boosts professionalism and simplifies travel operations.</p>
      `
    },
    {
      id: 5,
      title: "Travel Technology Companies And Online Travel Business",
      excerpt: "Discover how Livetour empowers travel companies with resource management tools, automated bookings, and robust agent handling.",
      image: "../../../src/assets/clients/Add_a_heading_(1).jpg",
      author: "Livetour Team",
      date: "Oct 17, 2019",

      views: "1.5k",
      comments: "0",
      readTime: "6 min read",
      fullContent: `
    <h2 class="text-2xl font-bold mb-4">Travel Technology Companies And Online Travel Business</h2>
    <p><strong>0 comments</strong></p>
    <p><strong>Livetour Team</strong></p>
    <p><strong>Posted on: 17 Oct 2019</strong></p>

    <p>Travel companies are competing with each other to bring the best services to travelers. Getting the whole process of booking and reservation automated helps reduce the burden of paperwork for the company. This is why tour management systems are in high demand. A good travel company gives you a detailed itinerary and lets you have an insight into how much you will have to spend and what facilities will be provided.</p>

    <p>Livetour is not just any other software, but surely it has made a mark of its own in the travel technology industry. The software is as robust as it should be — providing the best solution regarding bookings, reservations, agent management, and all the aspects related to organizing a trip.</p>

    <h3 class="text-xl font-semibold mt-6 mb-2">Resource Management In Livetour: A Feature Beyond Words</h3>
    <p>Livetour has a good resource management feature that helps manage agents, vehicles, hotels, houseboats, and even more within minutes. It lets the travel company schedule the agents by season and rates. You get the quotes within minutes and there is no fumbling around with the contract. It is all done in a matter of seconds. The software is well approved by a wide range of travel companies.</p>

    <h4 class="text-lg font-medium mt-4 mb-2">Get A Schedule Of Properties</h4>
    <p>You can manage your properties with the seasonal rates as bulk or individually. This makes it easy for you to get the contracts with agents quickly.</p>

    <h4 class="text-lg font-medium mt-4 mb-2">Manage Vehicles With Their Pricing</h4>
    <p>Livetour enables vehicle management with its price calculation. The system gives an automatic price calculation in the itinerary builder.</p>

    <h4 class="text-lg font-medium mt-4 mb-2">Get Your Best Quote With The Agent</h4>
    <p>Agent management is an issue that every tour company faces. The company must make sure every agent is taken into consideration along with the transactions and debit and credit details.</p>

    <h4 class="text-lg font-medium mt-4 mb-2">Manage Houseboats Within A Snap</h4>
    <p>Houseboats are a vital inclusion in all the tour packages. Managing them poses a major hurdle in arranging tours. With the resource management feature, Livetour makes this as simple as a child’s play. The rates are displayed in the itinerary builder.</p>

    <h3 class="text-xl font-semibold mt-6 mb-2">Livetour: A Jack Of All Trades</h3>
    <p>With Livetour, you have a strong grasp over your business with records on all aspects. Be it resource management or CRM services, there is no place for any flaw. Your business is made as professional as it can be with the best software solution. With prompt customer service, Livetour is the answer to all your business needs keeping a record of whatever customer queries come your way.</p>
  `
    },

    {
      id: 6,
      title: "An Overview Of Features In Livetour",
      excerpt: "Explore how Livetour transforms your travel business with real-time dashboards, itinerary automation, lead management, and intelligent reporting.",
      image: "../../../src/assets/clients/livetour_features.jpg",
      author: "Livetour Team",
      date: "Jun 30, 2016",

      views: "1.5k",
      comments: "0",
      readTime: "7 min read",
      fullContent: `
    <h2 class="text-2xl font-bold mb-4">An Overview Of Features In Livetour</h2>
    <p><strong>0 comments</strong></p>
    <p><strong>Livetour Team</strong></p>
    <p><strong>Posted on: 30 Jun 2016</strong></p>

    <p>LiveTour is an intelligent and smart travel business management software, which gives you the freedom from hectic schedules. With LiveTour, your travel business will be organised, smarter and faster. It becomes your memory — it will remember everything related to your business.</p>

    <p><strong>Memory dashboard will show the following things in real time:</strong></p>
    <ul class="list-disc ml-6">
      <li>Arrivals and departures</li>
      <li>Guests in the tour</li>
      <li>Aged receivables and payables</li>
      <li>Agent and property payments</li>
      <li>Driver allocations</li>
      <li>Reservation verification</li>
      <li>Automatic invoice generation</li>
      <li>And much more...</li>
    </ul>

    <p>Without LiveTour, you may have to create separate office files for every entry, resulting in delays and management difficulties. But this will not happen anymore — LiveTour updates records in real time, and you can access your business data wherever you are, while also monitoring your employees’ performance.</p>

    <h3 class="text-xl font-semibold mt-6 mb-2">Key Features in LiveTour – Your Complete Travel Business Management Solution</h3>
    <ul class="list-disc ml-6">
      <li>Reduce paperwork by 75% or more by implementing LiveTour in your company.</li>
      <li>Real-time updates for every case entry.</li>
      <li>Clean and systematically designed dashboard.</li>
      <li>Automated Itinerary Builder saves time — select a pre-defined, beautiful template and send trip plans to your customers instantly.</li>
      <li>Easy lead management: collect leads from your website or upload them in bulk, then assign to executives with ease.</li>
      <li>Auto sales follow-up system with a unique SMS alert feature to keep clients informed.</li>
      <li>Automated voucher and invoice generation without clerical errors.</li>
      <li>Driver allocation and reservation system with multi-level verification.</li>
      <li>Smart price management system with seasonal bulk rate updates.</li>
      <li>One-stop solution to manage all resources — hotels, vehicles, houseboats — with support for bulk updates.</li>
      <li>Livetour generates multiple reports from a single case entry, presented via beautiful charts and summaries.</li>
      <li>Supports multi-branch operations with centralized controls.</li>
    </ul>

    <p class="mt-6">LiveTour truly offers an all-in-one solution for managing a modern travel business. Whether it’s streamlining operations or enhancing customer satisfaction, Livetour empowers you to run your business with clarity and confidence.</p>
  `
    }

  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    ...Array.from(new Set(blogPosts.map(p => p.category))).map(cat => ({
      id: cat,
      name: cat,
      count: blogPosts.filter(p => p.category === cat).length
    }))
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollSlideRight>
        <div className="text-center mb-12">
          <h2 className="">
            CRM Insights & Industry News
          </h2>
          <p className="caption_text   text-center max-w-3xl mx-auto mb-10 mt-5">
            Stay ahead of the curve with expert insights, best practices, and the latest trends
            in tour CRM and customer experience management.
          </p>
        </div>
        </ScrollSlideRight>

        {/* Search and Filters */}


        {/* Featured Stats */}
        <ScrollSlideLeft>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-3xl border border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-black ">24</div>
                <div className="text-gray-600 text-sm mt-2">Articles Published</div>
              </div>
              <div className="p-3 bg-[#fae1b6] rounded-full">
                <Calendar className="" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-black">15K+</div>
                <div className="text-gray-600 text-sm mt-2">Monthly Readers</div>
              </div>
              <div className="p-3 bg-[#fae1b6] rounded-full">
                <TrendingUp className="" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-black">4.8</div>
                <div className="text-gray-600 text-sm mt-2">Average Rating</div>
              </div>
              <div className="p-3 bg-[#fae1b6] rounded-full">
                <Star className="" />
              </div>
            </div>
          </div>
        </div>
        </ScrollSlideLeft>

        

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      {/* Blog Grid */}
        <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
    </section>
  );
};

export default BlogSection;