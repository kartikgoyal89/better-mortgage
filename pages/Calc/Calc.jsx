import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./calc.css";
import { MdArrowRightAlt } from "react-icons/md";
import { GrDocumentVerified } from "react-icons/gr";
import { IoIosTrendingDown } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Calc = () => {
  const [homePrice, setHomePrice] = useState(1312500);
  const [downPayment, setDownPayment] = useState(262500);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [propertyTaxes, setPropertyTaxes] = useState(267);
  const [homeownersInsurance, setHomeownersInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [
    homePrice,
    downPayment,
    interestRate,
    loanLength,
    propertyTaxes,
    homeownersInsurance,
    hoaFees,
    utilities,
  ]);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanLength * 12;

    const principalAndInterest =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalMonthlyPayment =
      principalAndInterest +
      propertyTaxes +
      homeownersInsurance +
      hoaFees +
      utilities;

    setMonthlyPayment(totalMonthlyPayment.toFixed(2));
  };

  return (
    <>
      <Header />
      <div className="calc-container">
        <div className="mortgage-calculator">
          <div className="existing-section">
            <h1 className="mortgage">Mortgage calculator</h1>
            <p className="mt-4 mb-4">
              Use our mortgage calculator built directly into it! Get accurate
              estimates for your monthly mortgage
              <br /> payments if you will be required to have private mortgage
              insurance (PMI). Also learn why
            </p>
            <div className="calculator-section">
              <div className="input-group">
                <label>Home price</label>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                />
              </div>
              <div className="input-group">
                <label className="month-label">Monthly payment</label>
                <div className="output">${monthlyPayment}/mo</div>
              </div>
              <div className="approve-div">
                <button className="approve-btn">Get pre-approved</button>
              </div>
            </div>
            <div className="slider-section">
              <input
                type="range"
                min="0"
                max="5000000"
                step="1000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </div>
            <div className="details-section">
              <div className="input-group">
                <label>ZIP code</label>
                <input type="text" value="110043" disabled />
              </div>
              <div className="input-group">
                <label>Down payment</label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
              </div>
              <div className="input-group">
                <label>Interest rate</label>
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </div>
              <div className="input-group">
                <label>Length of loan</label>
                <select
                  value={loanLength}
                  onChange={(e) => setLoanLength(Number(e.target.value))}
                >
                  <option value={30}>30 years</option>
                  <option value={20}>20 years</option>
                  <option value={15}>15 years</option>
                </select>
              </div>
            </div>
          </div>
          <div className="new-section">
            <div className="left">
              <h2>Monthly payment breakdown</h2>
              <div className="output">${monthlyPayment}/mo</div>
            </div>
            <div className="breakdown-details">
              <div className="breakdown-item">
                <span>Principal & interest</span>
                <span className="principle">
                  $
                  {(
                    monthlyPayment -
                    propertyTaxes -
                    homeownersInsurance -
                    hoaFees -
                    utilities
                  ).toFixed(2)}
                </span>
              </div>
              <div className="breakdown-item">
                <span>Property taxes</span>
                <input
                  type="number"
                  value={propertyTaxes}
                  onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                />
              </div>
              <div className="breakdown-item">
                <span>Homeowners insurance</span>
                <input
                  type="number"
                  value={homeownersInsurance}
                  onChange={(e) =>
                    setHomeownersInsurance(Number(e.target.value))
                  }
                />
              </div>
              <div className="breakdown-item">
                <span>HOA fees</span>
                <input
                  type="number"
                  value={hoaFees}
                  onChange={(e) => setHoaFees(Number(e.target.value))}
                />
              </div>
              <div className="breakdown-item">
                <span>Utilities</span>
                <input
                  type="number"
                  value={utilities}
                  onChange={(e) => setUtilities(Number(e.target.value))}
                />
              </div>
              <button className="copy-link">Copy estimate link</button>
            </div>
          </div>
          <hr className="line" />
          <div className="para">
            <h1>How does a mortgage calculator help me?</h1>
            <p>
              When deciding how much house you can afford, one of the most
              important pieces to determine is whether a home will fit into your
              monthly budget. A mortgage calculator helps you understand the
              monthly cost of a home. And ours will allow you to enter different
              down payments and interest rates to help determine what is
              affordable for you.
            </p>
          </div>

          <hr className="line" />
          <div className="para">
            <h3>How much monthly mortgage payment can I afford?</h3>
            <p>
              Lenders determine how much you can afford on a monthly housing
              payment by calculating your debt-to-income ratio (DTI). The
              maximum DTI you can have in order to qualify for most mortgage
              loans is often between 45-50%, with your anticipated housing costs
              included.
            </p>
            <p>
              Your DTI is the balance between your income and your debt. It
              helps lenders understand how safe or risky it is for them to
              approve your loan. A DTI ratio represents how much of your gross
              monthly income is spoken for by creditors, and how much of it is
              left over to you as disposable income. It’s most commonly written
              as a percentage. For example, if you pay half your monthly income
              in debt payments, you would have a DTI of 50%.
            </p>
            <div className="img">
              <span>
                Formula for calculating your debt-to-income (DTI) ratio:
              </span>
              <img
                src="https://media.better.com/better-com/mortgage-calculator/dti-formula.jpg"
                alt=""
              />
            </div>
            <div className="img">
              <span>
                Here’s an example of what calculating your DTI might look like:
              </span>
              <img
                src="https://media.better.com/better-com/mortgage-calculator/dti-example.jpg"
                alt=""
              />
            </div>
          </div>
          <hr className="line" />
          <div className="para">
            <h1 className="mb-4">
              How is Better’s mortgage calculator different?
            </h1>
            <div className="in-para">
              <h3>
                This mortgage calculator shows your payments with taxes and
                insurance
              </h3>
              <p>
                The property taxes you contribute are used to finance the
                services provided by your local government to the community.
                These services encompass schools, libraries, roads, parks, water
                treatment, police, and fire departments. Even after your
                mortgage has been fully paid, you will still need to pay
                property taxes. If you neglect your property taxes, you run the
                risk of losing your home to your local tax authority.
              </p>
              <p>
                Your lender will usually require you to have homeowners
                insurance while you're settling your mortgage. This is a common
                practice among lenders because they understand that nobody wants
                to continue paying a mortgage on a home that's been damaged or
                destroyed.
              </p>
              <p>
                Here's an interesting fact: Once you fully own your home, the
                choice to maintain homeowners insurance is entirely up to you.
                However, to ensure your home is protected against damages caused
                by fires, lightning strikes, and natural disasters that are
                common in your area, it is highly recommended to keep it.
                Therefore, always factor in these costs when using a Mortgage
                Calculator.
              </p>
            </div>
            <div className="in-para">
              <h3>
                This mortgage calculator shows your mortgage costs with PMI
              </h3>
              <p>
                PMI, an abbreviation for private mortgage insurance, aids
                potential homeowners in qualifying for a mortgage without the
                necessity of a 20% down payment. By opting for a lower down
                payment and choosing a mortgage with PMI, you can purchase a
                home sooner, begin accruing equity, and keep cash available for
                future needs. This can all be calculated using this Mortgage
                Calculator.
              </p>
              <p>
                Choosing a mortgage with PMI is a popular option: 71% of
                first-time homebuyers had a down payment of less than 20% in
                July 2021. In 2020, the median down payment for first-time
                homebuyers was just 7%, and it hasn’t risen above 10% since
                1989.
              </p>
              <p>
                PMI is automatically removed from conventional mortgages once
                your home equity reaches 22%. Alternatively, you can request the
                removal of PMI once you've accumulated at least 20% home equity.
              </p>
            </div>
            <div className="in-para">
              <h3>This mortgage calculator includes HOA fees</h3>
              <p>
                Homeowners association (“HOA”) fees are typically charged
                directly by a homeowners association, but as HOA fees come part
                and parcel with condos, townhomes, and planned housing
                developments, they’re an essential factor to consider when
                calculating your mortgage costs.
              </p>
              <p>
                Homes that share structural elements, such as roofs and walls,
                or community amenities like landscaping, pools, or BBQ areas,
                often require homeowners to pay HOA fees for the maintenance of
                these shared features. It's important to factor in these costs
                during your budget planning stage, especially considering that
                HOA fees typically increase annually. HOAs may also charge
                additional fees known as ‘special assessments’ to cover
                unexpected expenses from time to time.
              </p>
            </div>
          </div>
          <hr className="line" />
          <div className="para">
            <h1 className="mb-4">
              How to calculate monthly mortgage payments?
            </h1>
            <p>
              Your monthly mortgage payment includes loan principal and
              interest, property taxes, homeowners insurance, and mortgage
              insurance (PMI), if applicable. While not typically included in
              your mortgage payment, homeowners also pay monthly utilities and
              sometimes pay homeowners association (HOA) fees, so it’s a good
              idea to factor these into your monthly budget. This mortgage
              calculator factors in all these typical monthly costs so you can
              really crunch the numbers.
            </p>
            <h3>Formula for calculating monthly mortgage payments</h3>
            <p>
              The easiest way to calculate your mortgage payment is to use a
              calculator, but for the curious or mathematically inclined, here’s
              the formula for calculating principal and interest yourself:
            </p>
            <div className="img">
              <img
                src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-formula.jpg"
                alt=""
                className="img"
              />
            </div>
            <span className="d-flex flex-column align-items-center justify-content-start">
              Where:
              <br />
              <ul>
                <li>M is monthly mortgage payments</li>
                <li>P is the principal loan amount (the amount you borrow)</li>
                <li>
                  r is the monthly interest rate
                  <br />
                  (annual interest rate divided by 12 and expressed as a
                  decimal)
                  <br />
                  For example:
                  <br />
                  if the annual interest rate is 5%,
                  <br />
                  the monthly rate would be 0.05/12 = .00417, or .417%
                </li>
                <li>
                  n is the total number of payments in months
                  <br />
                  For example:
                  <br />
                  for a 30-year loan, n = 30×12 = 360 months
                </li>
              </ul>
              <span classNames="mb-3">Here’s a simple example:</span>
            </span>
            <div className="img">
              <img
                src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-example.jpg"
                alt=""
              />
            </div>
            <span>
              This formula assumes a fixed-rate mortgage, where the interest
              rate remains constant throughout the loan term. And remember,
              you’ll still need to add on taxes, insurance, utilities, and HOA
              fees if applicable.
            </span>
          </div>
          <hr className="line" />
          <div className="in-para">
            <h3>How to use this mortgage calculator?</h3>
            <p>
              Play around with different home prices, locations, down payments,
              interest rates, and mortgage lengths to see how they impact your
              monthly mortgage payments.
            </p>
            <p>
              Increasing your down payment and decreasing your interest rate and
              mortgage term length will make your monthly payment go down.
              Taxes, insurance, and HOA fees will vary by location. If you enter
              a down payment amount that’s less than 20% of the home price,
              private mortgage insurance (PMI) costs will be added to your
              monthly mortgage payment. As the costs of utilities can vary from
              county to county, we’ve included a utilities estimate that you can
              break down by service. If you’re thinking about buying a condo or
              into a community with a Homeowners Association (HOA), you can add
              HOA fees.
            </p>
            <p>
              The only amounts we haven’t included are the money you’ll need to
              save for annual home maintenance/repairs or the costs of home
              improvements. To see how much home you can afford including these
              costs, take a look at the Better home affordability calculator.
            </p>
            <p>
              Fun fact: Property tax rates are extremely localized, so two homes
              of roughly the same size and quality on either side of a municipal
              border could have very different tax rates. Buying in an area with
              a lower property tax rate may make it easier for you to afford a
              higher-priced home.
            </p>

            <h3>Do you know your property tax rate?</h3>
            <p>
              While exact property tax rates vary by county, it can be helpful
              to look at taxes on the state level to get an idea for taxes in
              your state. Here’s a helpful chart from Forbes breaking down the
              Census Bureau’s 2021 American Community Survey 5-year estimate:
            </p>
            <div className="table d-flex align-items-center justify-content-center">
              <table class="min-w-full border border-successAccent table-auto clip-inset-round">
                <thead class="">
                  <tr>
                    <th class="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                        State
                      </p>
                    </th>
                    <th class="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                        Median Effective Property Tax Rate
                      </p>
                    </th>
                    <th class="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                        Mean Effective Property Tax Rate
                      </p>
                    </th>
                    <th class="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                        Median Home Value
                      </p>
                    </th>
                    <th class="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                      <p class="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                        Median Property Taxes Paid
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="even:bg-successBackground">
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AL
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.41%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.40%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $157,100
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $646
                      </p>
                    </td>
                  </tr>
                  <tr class="even:bg-successBackground">
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AK
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        1.23%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        1.04%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $282,800
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $3,464
                      </p>
                    </td>
                  </tr>
                  <tr class="even:bg-successBackground">
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AZ
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.62%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.63%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $265,600
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $1,648
                      </p>
                    </td>
                  </tr>
                  <tr class="even:bg-successBackground">
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        AR
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.62%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        0.64%
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $142,100
                      </p>
                    </td>
                    <td class="border border-successAccent text-center px-2 py-3 md:px-4">
                      <p class="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                        $878
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="line" />
          <div className="in-para">
            <h1>How to reduce your monthly mortgage payments?</h1>
            <p>
              The lower the purchase price of the home, the lower your loan
              amount will be. But if the seller is less than willing to cut you
              a deal, you have other options.
            </p>
          </div>
          <div className="in-para">
            <h3>Extend the length of your mortgage</h3>
            <p>
              The more time you have to pay off the mortgage, the less each
              monthly mortgage payment will be. (In lender-speak, ‘extending the
              length of your mortgage’ is known as ‘increasing your loan term’.)
              This is why people often choose a 30-year fixed rate mortgage over
              one with a 15- or 20-year term.
            </p>
          </div>
          <div className="in-para">
            <h3>Increase your down payment</h3>
            <p>
              The smaller the amount of your mortgage, the smaller your monthly
              mortgage payments will be. If you’re able to put at least 20% of
              the home price towards your down payment, you’ll be able to avoid
              PMI (private mortgage insurance). Even if you can’t afford a
              complete 20% down payment, boosting your down payment will help
              you get PMI removed sooner. In fact, boosting your down payment by
              5% can lower your monthly PMI fees.
            </p>
          </div>
          <div className="in-para">
            <h3>Get a lower interest rate</h3>
            <p>
              Increasing your down payment can be one way to help you qualify
              for a lower interest rate. The amount of your down payment
              compared to the total amount of the loan is called your
              loan-to-value ratio (LTV).
            </p>
            <p>
              Depending on your loan amount, a lower LTV may increase the
              likelihood of you being offered a low interest rate. If you intend
              on keeping your home for a while, you could consider buying points
              to reduce your interest rate. Buying points essentially means you
              agree to pay more upfront costs in exchange for a lower monthly
              payment.
            </p>
            <p>
              If you think you may sell or refinance the home in the first 5-10
              years of the mortgage, you could consider an adjustable-rate
              mortgage (ARM). An ARM offers a lower fixed interest rate for a
              set introductory period—typically 5, 7, or 10 years. Once the set
              introductory period ends, the interest rate adjusts (interest rate
              may increase after consummation). The introductory interest rate
              for ARMs is typically lower than the interest rate for a
              conventional fixed-rate mortgage which could make it a great way
              to save on interest if you know you won’t keep the mortgage for
              long.
            </p>
            <p>
              If you’re not planning on buying a home for a while, improving
              your credit score is a tried and true way of increasing your
              chances of qualifying for a lower interest rate. By reducing your
              debt-to-income ratio (DTI), lenders will see that you comfortably
              afford your mortgage and may be more willing to offer a lower
              interest rate.
            </p>
          </div>
          <hr className="line" />
          <div className="in-para">
            <h1>How much home can I afford?</h1>
            <p>
              Once again, the easiest way to do this is with a calculator! To
              know if a home is in your budget, try out our home affordability
              calculator. This calculator will take a few inputs from you, like
              income and savings, and let you know the maximum amount of home
              you can afford.
            </p>
          </div>
          <hr className="line" />

          <div className="in-para">
            <h1>Next steps to buying a house</h1>
            <p>
              There are 8 steps to buying a house and by using this calculator
              you’ve completed step 2 (calculating your home affordability) and
              maybe even step 1 (getting your finances in order).
            </p>
            <p>
              The next step is getting pre-approved. A mortgage pre-approval
              with Better Mortgage takes as little as 3-minutes and doesn’t
              impact your credit score. It’s a free, no-commitment way to see
              how much home you can buy, the mortgages you qualify for, and the
              range of interest rates you’ll be offered.
            </p>
            <p>
              If you’re ready to buy a home now, our definitive home buying
              checklist can walk you through everything you need to know to get
              the home you want. With your Better Mortgage pre-approval letter
              in hand, you’ll be able to show sellers and real estate agents
              that you mean business—giving you an edge over homebuyers that
              don’t have this kind of proof that they’re financially ready to
              purchase. And by working with an agent from Better Real Estate and
              funding with Better Mortgage, you’ll save $2,000 on closing costs,
              and save up to $8,200 on average over the life of your loan.**
            </p>
          </div>
          <hr className="line" />
          <div className="in-para">
            <h1>More resources</h1>
          </div>

          <div className="box-parent">
            <div className="box">
              <GrDocumentVerified className="fs-4 mb-2" />
              <h3>
                Get pre-approved to see how
                <br /> much you can borrow
              </h3>
              <Link>
                Get Started <MdArrowRightAlt />
              </Link>
              <p>Won’t impact your credit</p>
            </div>
            <div className="box">
              <IoIosTrendingDown className="fs-4 mb-2" />

              <h3>See today's rates in your area</h3>
              <Link>
                See Rates <MdArrowRightAlt />
              </Link>
              <p>Won’t impact your credit</p>
            </div>
            <div className="box">
              <CiCalculator1 className="fs-2 mb-2" />
              <h3>
                Find out your max homebuying
                <br /> budget
              </h3>
              <Link>
                Try our mortgage calculator <MdArrowRightAlt />
              </Link>
              <p>Won’t impact your credit</p>
            </div>
          </div>
          <span className="sml-txt">
            *See Better Real Estate discount terms and conditions.
            <br /> **The average lifetime savings estimate is based on a
            comparison of the Freddie Mac Primary Mortgage Market Survey’s
            (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s
            own offered rate for a comparable mortgage product between Jan ‘20 -
            Dec ‘20. PMMS is based on conventional, conforming fully-amortizing
            home purchase loans for borrowers with a loan-to-value of 80 percent
            and with excellent credit. Better Mortgage’s offered rate is based
            on pricing output for a 30-year fixed-rate mortgage product with a
            30-day lock period for a single-family, owner-occupied residential
            property and a borrower with excellent (760 FICO) credit and a
            loan-to-value ratio of 80 percent. Individual savings could vary
            based on current market rates, property type, loan amount,
            loan-to-value, credit score, debt-to-income ratio and other
            variables.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calc;
