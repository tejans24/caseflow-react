import React, { PropTypes } from 'react';

const Footer = (props) => {
  return <footer className="cf-txt-c usa-grid cf-app-footer">
    <div>
      <div className="cf-push-left">
        <span title="">Built</span> with <abbr title="love">&#9825;</abbr> by the { " " }
        <a href="http://www.va.gov/ds/">Digital Service at the <abbr title="Department of Veterans Affairs">VA</abbr></a>
      </div>
      <div className="cf-push-right">
        <a target="_blank" href="<%= feedback_url %>" onClick="ga('send', 'event', { eventCategory: 'Menu', eventAction: 'ClickFeedback', eventLabel: 'Feedback', eventValue: 1});">
          Send feedback
        </a>
      </div>
    </div>
  </footer>
}

export default Footer;