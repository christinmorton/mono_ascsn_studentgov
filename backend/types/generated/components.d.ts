import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutSurveyQuestion extends Struct.ComponentSchema {
  collectionName: 'components_layout_survey_questions';
  info: {
    displayName: 'SurveyQuestion';
    icon: 'rotate';
    description: '';
  };
  attributes: {
    Question: Schema.Attribute.Text & Schema.Attribute.Required;
    Type: Schema.Attribute.Enumeration<
      ['Boolean', 'MultipleChoice', 'ShortAnswer', 'LongAnswer', 'Feedback']
    >;
    Active: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface LayoutSupport extends Struct.ComponentSchema {
  collectionName: 'components_layout_supports';
  info: {
    displayName: 'Support';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    ascsn_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::marketing-article.marketing-article'
    >;
  };
}

export interface LayoutResources extends Struct.ComponentSchema {
  collectionName: 'components_layout_resources';
  info: {
    displayName: 'Resources';
    icon: 'cog';
    description: '';
  };
  attributes: {
    ascsn_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::marketing-article.marketing-article'
    >;
  };
}

export interface LayoutNewsletterForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_newsletter_forms';
  info: {
    displayName: 'NewsletterForm';
    icon: 'crown';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Subtext: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutMissionStatement extends Struct.ComponentSchema {
  collectionName: 'components_layout_mission_statements';
  info: {
    displayName: 'MissionStatement';
    icon: 'archive';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Subtext: Schema.Attribute.Text & Schema.Attribute.Required;
    ShowLogo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'Link';
    icon: 'earth';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'emotionUnhappy';
  };
  attributes: {
    CallToAction: Schema.Attribute.String & Schema.Attribute.Required;
    HeroImage: Schema.Attribute.Media<'images' | 'videos', true>;
    Buttons: Schema.Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutGuiddance extends Struct.ComponentSchema {
  collectionName: 'components_layout_guiddances';
  info: {
    displayName: 'guidance';
    icon: 'book';
    description: '';
  };
  attributes: {
    ascsn_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::marketing-article.marketing-article'
    >;
  };
}

export interface LayoutFlyerDates extends Struct.ComponentSchema {
  collectionName: 'components_layout_flyer_dates';
  info: {
    displayName: 'FlyerDates';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    StartDate: Schema.Attribute.Date;
    StartTime: Schema.Attribute.Time;
    EndDate: Schema.Attribute.Date;
    EndTime: Schema.Attribute.Time;
    Event: Schema.Attribute.Enumeration<
      [
        'Day-1',
        'Day-3',
        'Week',
        'Weekend',
        'Seminar',
        'Convention',
        'CSN Event',
      ]
    >;
    ConfirmedEvent: Schema.Attribute.Boolean & Schema.Attribute.Required;
    ActiveNow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Postoned: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Cancelled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Completed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    EventStatus: Schema.Attribute.String;
  };
}

export interface LayoutEventHostContact extends Struct.ComponentSchema {
  collectionName: 'components_layout_event_host_contacts';
  info: {
    displayName: 'EventHostContact';
    icon: 'archive';
  };
  attributes: {
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    Phone: Schema.Attribute.String & Schema.Attribute.Required;
    OnSiteHostPhone: Schema.Attribute.String & Schema.Attribute.Required;
    OnSiteHostEmail: Schema.Attribute.Email & Schema.Attribute.Required;
  };
}

export interface LayoutClubOrganizer extends Struct.ComponentSchema {
  collectionName: 'components_layout_club_organizers';
  info: {
    displayName: 'ClubOrganizer';
    icon: 'alien';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    ActiveSemester: Schema.Attribute.String;
  };
}

export interface LayoutClubEvent extends Struct.ComponentSchema {
  collectionName: 'components_layout_club_events';
  info: {
    displayName: 'ClubEvent';
    icon: 'crown';
  };
  attributes: {
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Date: Schema.Attribute.Date & Schema.Attribute.Required;
    Start: Schema.Attribute.Time & Schema.Attribute.Required;
    End: Schema.Attribute.Time;
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutChildSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_child_sections';
  info: {
    displayName: 'ChildSection';
    icon: 'dashboard';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    PlainTextDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    PrettyDescription: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'videos', true>;
    Link: Schema.Attribute.String;
    ChildLink: Schema.Attribute.Component<'layout.link', false>;
  };
}

export interface LayoutAddress extends Struct.ComponentSchema {
  collectionName: 'components_layout_addresses';
  info: {
    displayName: 'address';
    icon: 'apps';
    description: '';
  };
  attributes: {
    PrimaryStreet: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    suite: Schema.Attribute.String;
    zipcode: Schema.Attribute.String & Schema.Attribute.Required;
    Building: Schema.Attribute.String;
    Office: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    SecondaryStreet: Schema.Attribute.String & Schema.Attribute.Unique;
    PostOfficeBox: Schema.Attribute.String & Schema.Attribute.Unique;
    Phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ConfigSocialLinkSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_config_social_link_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'clock';
  };
  attributes: {
    SocialMedia: Schema.Attribute.Enumeration<
      ['LinkedIn', 'Twitter', 'Facebook', 'TikTok']
    >;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CompanySecondaryContact extends Struct.ComponentSchema {
  collectionName: 'components_company_secondary_contacts';
  info: {
    displayName: 'SecondaryContact';
    icon: 'command';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    Phone: Schema.Attribute.String;
  };
}

export interface CompanyPrimaryContact extends Struct.ComponentSchema {
  collectionName: 'components_company_primary_contacts';
  info: {
    displayName: 'PrimaryContact';
    icon: 'cup';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    Phone: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.survey-question': LayoutSurveyQuestion;
      'layout.support': LayoutSupport;
      'layout.resources': LayoutResources;
      'layout.newsletter-form': LayoutNewsletterForm;
      'layout.mission-statement': LayoutMissionStatement;
      'layout.link': LayoutLink;
      'layout.hero': LayoutHero;
      'layout.guiddance': LayoutGuiddance;
      'layout.flyer-dates': LayoutFlyerDates;
      'layout.event-host-contact': LayoutEventHostContact;
      'layout.club-organizer': LayoutClubOrganizer;
      'layout.club-event': LayoutClubEvent;
      'layout.child-section': LayoutChildSection;
      'layout.address': LayoutAddress;
      'config-social-link.social-link': ConfigSocialLinkSocialLink;
      'company.secondary-contact': CompanySecondaryContact;
      'company.primary-contact': CompanyPrimaryContact;
    }
  }
}
