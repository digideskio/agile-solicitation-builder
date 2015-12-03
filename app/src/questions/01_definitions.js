var React = require('react');

var termsText = "AGILE DEVELOPMENT/AGILE SOFTWARE DEVELOPMENT: A proven commercial methodology for software development that is characterized by incremental and iterative processes where releases are produced in close collaboration with the customer. This process improves investment manageability, lowers risk of project failure, shortens the time to realize value, and allows agencies to better adapt to changing needs.\n\nCONTRACTING OFFICER (CO): The Government official responsible for the execution and administration of contracts on behalf of the Government.\n\nCONTRACTING OFFICER’S REPRESENTATIVE (COR): An individual designated by the Contracting Officer to act as his/her representative to assist in managing the contract. The authorities and limitations of a COR appointment are contained in the written letter of appointment.\n\nDAY: A calendar day unless stated otherwise. If a deliverable is due on a weekend or holiday, the deliverable shall be considered due the next business day.\n\nQUARTER: A quarter will be defined as the first of January through the end of March, first of April through the end of June, first of July through the end of September, and first of October through the end of December.\n\nBUSINESS DAY: Any day other than a Saturday, a Sunday, a Federal holiday or other day on which the Federal Government by law or executive order is closed. Note: This includes any weather-related office closures if the place of performance is in a Federal Building.\n\nMINIMUM FUNCTIONALITY: The minimum capabilities a product should have to meet the Government’s objectives.\n\nAGILE ENVIRONMENT: A team-based setting for IT product development where the Agile development methodology is used.\n\nITERATION/SPRINT/RELEASE CYCLE:Divisions of time within the Agile development framework.  Each iteration is small in scale (i.e., encompasses a single or a few function(s) within a multistep process). Multiple iterations form releases. For more information, see the TechFAR at https://github.com/WhiteHouse/playbook/blob/gh-pages/_includes/techfar-online.md\n\nMILESTONES/EPICS:A necessary step in a process. In this document, used to refer to components of a given project.\n\nSTORY POINT:A measurement of work and effort. Story points are used in an Agile development environment to demonstrate how much work was achieved in a given sprint or iteration. For more information, see the <a href='https://github.com/WhiteHouse/playbook/blob/gh-pages/_includes/techfar-online.md' target='_blank'>TechFAR</a>\n\nTHROUGHPUT: The amount of material or items passing through a system or process; in this document, refers to the work activity of a product development team.";

var defaultTerms = (
    <div id="definitions">

        <span className="term">AGILE DEVELOPMENT/AGILE SOFTWARE DEVELOPMENT</span>
        <p>A proven commercial methodology for software development that is characterized by incremental and iterative processes where releases are produced in close collaboration with the customer. This process improves investment manageability, lowers risk of project failure, shortens the time to realize value, and allows agencies to better adapt to changing needs.</p>

        <span className="term">CONTRACTING OFFICER (CO)</span> 
        <p>The Government official responsible for the execution and administration of contracts on behalf of the Government.</p>

        <span className="term">CONTRACTING OFFICER’S REPRESENTATIVE (COR )</span>
        <p>An individual designated by the Contracting Officer to act as his/her representative to assist in managing the contract. The authorities and limitations of a COR appointment are contained in the written letter of appointment.</p>

        <span className="term">DAY</span>
        <p>A calendar day unless stated otherwise. If a deliverable is due on a weekend or holiday, the deliverable shall be considered due the next business day.</p>

        <span className="term">QUARTER</span>
        <p>A quarter will be defined as the first of January through the end of March, first of April through the end of June, first of July through the end of September, and first of October through the end of December.</p>

        <span className="term">PRODUCT VISION</span>
        <p>@TODO</p>

        <span className="term">BUSINESS DAY</span>
        <p>Any day other than a Saturday, a Sunday, a Federal holiday or other day on which the Federal Government by law or executive order is closed. Note: This includes any weather-related office closures if the place of performance is in a Federal Building.</p>

        <span className="term">MINIMUM FUNCTIONALITY</span>
        <p>The minimum capabilities a product should have to meet the Government’s objectives.</p>

        <span className="term">AGILE ENVIRONMENT</span>
        <p>A team-based setting for IT product development where the Agile development methodology is used.</p>

        <span className="term">ITERATION/SPRINT/RELEASE CYCLE</span>
        <p>Divisions of time within the Agile development framework.  Each iteration is small in scale (i.e., encompasses a single or a few function(s) within a multistep process). Multiple iterations form releases. For more information, see the TechFAR at https://github.com/WhiteHouse/playbook/blob/gh-pages/_includes/techfar-online.md </p>

        <span className="term">MILESTONES/EPICS</span>
        <p>A necessary step in a process. In this document, used to refer to components of a given project.</p>

        <span className="term">STORY POINT</span>
        <p>A measurement of work and effort. Story points are used in an Agile development environment to demonstrate how much work was achieved in a given sprint or iteration. For more information, see the <a href="https://github.com/WhiteHouse/playbook/blob/gh-pages/_includes/techfar-online.md" target="_blank">TechFAR</a>.</p>

        <span className="term">THROUGHPUT</span>
        <p>The amount of material or items passing through a system or process; in this document, refers to the work activity of a product development team.</p>

    </div>
);

    // fetchDefinitionsSettings: function(cb) {
    //     // TODO: replace w/ actual server call
    //     var definitionsSettings = localStorage.getItem("definitionsSettings");
    //     if(!definitionsSettings) {
    //         cb("Definitions do not exist");
    //     } else {
    //         cb(null, JSON.parse(definitionsSettings));
    //     }
    // },
    // saveDefinitionsSettings: function(definitionsSettings, cb) {
    //     // TODO: replace w/ actual server call
    //     localStorage.setItem("definitionsSettings", JSON.stringify(definitionsSettings));
    //     cb(null);
    // },

var Definition = React.createClass({
    // Custom logic
    handleChange: function(event) {
        this.setState({
            text: event.target.value,
        });
        // TODO: add auto-save at some point
    },

    // Every question must implement a save() method
    save: function(cb) {
      localStorage.setItem("definitions", this.state.text)
      // @TODO put_data
    },

    // React functions

    componentDidMount: function() {
      content = get_data("definitions");
      this.setState({
        text: content,
      });
    },
    getInitialState: function() {
        return {
            response: false,
            text: localStorage.getItem("definitions"),
        };
    },
    render: function() {
        return (
            <div>
                <div className="main-heading">Definitions</div>
                <p>These are the standard definitions for agile development terms in alignment with the USDS Playbook. You can also modify the definitions and add additional terms. When you are done click the "Next" button at the bottom of the page.</p>
                <textarea className="form-control" rows="10" value={this.state.text} onChange={this.handleChange}></textarea>
            </div>
        );
    },
});

module.exports = Definition;