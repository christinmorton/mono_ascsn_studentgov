import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyPrimaryContact extends Struct.ComponentSchema {
  collectionName: 'components_company_primary_contacts';
  info: {
    displayName: 'PrimaryContact';
    icon: 'cup';
  };
  attributes: {
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Phone: Schema.Attribute.String;
  };
}

export interface CompanySecondaryContact extends Struct.ComponentSchema {
  collectionName: 'components_company_secondary_contacts';
  info: {
    displayName: 'SecondaryContact';
    icon: 'command';
  };
  attributes: {
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Phone: Schema.Attribute.String;
  };
}

export interface ConfigSocialLinkSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_config_social_link_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'clock';
  };
  attributes: {
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    SocialMedia: Schema.Attribute.Enumeration<
      ['LinkedIn', 'Twitter', 'Facebook', 'TikTok']
    >;
  };
}

export interface DataAssignedSurveyQuestionIds extends Struct.ComponentSchema {
  collectionName: 'components_data_assigned_survey_question_ids';
  info: {
    displayName: 'assigned_survey_question_ids';
    icon: 'apps';
  };
  attributes: {
    question_id: Schema.Attribute.String;
    question_slug: Schema.Attribute.String;
  };
}

export interface DataQuestionIdList extends Struct.ComponentSchema {
  collectionName: 'components_data_question_id_lists';
  info: {
    displayName: 'question_id_list';
  };
  attributes: {
    question_id: Schema.Attribute.String & Schema.Attribute.Required;
    question_slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface DataUpdatedByUser extends Struct.ComponentSchema {
  collectionName: 'components_data_updated_by_users';
  info: {
    displayName: 'updated_by_user';
    icon: 'bell';
  };
  attributes: {
    user_id: Schema.Attribute.String;
  };
}

export interface LayoutAddress extends Struct.ComponentSchema {
  collectionName: 'components_layout_addresses';
  info: {
    description: '';
    displayName: 'address';
    icon: 'apps';
  };
  attributes: {
    Building: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    Office: Schema.Attribute.String;
    Phone: Schema.Attribute.String & Schema.Attribute.Required;
    PostOfficeBox: Schema.Attribute.String & Schema.Attribute.Unique;
    PrimaryStreet: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    SecondaryStreet: Schema.Attribute.String & Schema.Attribute.Unique;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    suite: Schema.Attribute.String;
    zipcode: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutChildSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_child_sections';
  info: {
    displayName: 'ChildSection';
    icon: 'dashboard';
  };
  attributes: {
    ChildLink: Schema.Attribute.Component<'layout.link', false>;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'videos', true>;
    Link: Schema.Attribute.String;
    PlainTextDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    PrettyDescription: Schema.Attribute.Blocks;
  };
}

export interface LayoutClubEvent extends Struct.ComponentSchema {
  collectionName: 'components_layout_club_events';
  info: {
    displayName: 'ClubEvent';
    icon: 'crown';
  };
  attributes: {
    Date: Schema.Attribute.Date & Schema.Attribute.Required;
    Description: Schema.Attribute.Text;
    End: Schema.Attribute.Time;
    Image: Schema.Attribute.Media<'images'>;
    Start: Schema.Attribute.Time & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutClubOrganizer extends Struct.ComponentSchema {
  collectionName: 'components_layout_club_organizers';
  info: {
    description: '';
    displayName: 'ClubOrganizer';
    icon: 'alien';
  };
  attributes: {
    ActiveSemester: Schema.Attribute.String;
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    user_id: Schema.Attribute.String;
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
    OnSiteHostEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    OnSiteHostPhone: Schema.Attribute.String & Schema.Attribute.Required;
    Phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFlyerDates extends Struct.ComponentSchema {
  collectionName: 'components_layout_flyer_dates';
  info: {
    description: '';
    displayName: 'FlyerDates';
    icon: 'bulletList';
  };
  attributes: {
    ActiveNow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Cancelled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Completed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ConfirmedEvent: Schema.Attribute.Boolean & Schema.Attribute.Required;
    Discount: Schema.Attribute.String;
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
    EventStatus: Schema.Attribute.String;
    Postoned: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    SpecialDescription: Schema.Attribute.Text;
    SpecialOffer: Schema.Attribute.String;
    StartDate: Schema.Attribute.Date;
    StartTime: Schema.Attribute.Time;
  };
}

export interface LayoutGuiddance extends Struct.ComponentSchema {
  collectionName: 'components_layout_guiddances';
  info: {
    description: '';
    displayName: 'guidance';
    icon: 'book';
  };
  attributes: {
    ascsn_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::marketing-article.marketing-article'
    >;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'emotionUnhappy';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'layout.link', true>;
    CallToAction: Schema.Attribute.String & Schema.Attribute.Required;
    HeroImage: Schema.Attribute.Media<'images' | 'videos', true>;
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

export interface LayoutMissionStatement extends Struct.ComponentSchema {
  collectionName: 'components_layout_mission_statements';
  info: {
    displayName: 'MissionStatement';
    icon: 'archive';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    ShowLogo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    Subtext: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface LayoutResources extends Struct.ComponentSchema {
  collectionName: 'components_layout_resources';
  info: {
    description: '';
    displayName: 'Resources';
    icon: 'cog';
  };
  attributes: {
    ascsn_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::marketing-article.marketing-article'
    >;
  };
}

export interface LayoutSecondaryContent extends Struct.ComponentSchema {
  collectionName: 'components_layout_secondary_contents';
  info: {
    displayName: 'secondary_content';
    icon: 'cast';
  };
  attributes: {
    ascsn_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::marketing-article.marketing-article'
    >;
    CallToAction: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface LayoutStudentAnswer extends Struct.ComponentSchema {
  collectionName: 'components_layout_student_answers';
  info: {
    description: '';
    displayName: 'StudentAnswer';
    icon: 'check';
  };
  attributes: {
    answered_question_id: Schema.Attribute.String;
    plain_text_answer: Schema.Attribute.Text;
    resources: Schema.Attribute.Media<'images' | 'videos' | 'audios', true>;
    rich_text_answer: Schema.Attribute.Blocks;
  };
}

export interface LayoutSupport extends Struct.ComponentSchema {
  collectionName: 'components_layout_supports';
  info: {
    description: '';
    displayName: 'Support';
    icon: 'cloud';
  };
  attributes: {
    ascsn_content: Schema.Attribute.Relation<
      'oneToOne',
      'api::marketing-article.marketing-article'
    >;
  };
}

export interface LayoutSurveyQuestion extends Struct.ComponentSchema {
  collectionName: 'components_layout_survey_questions';
  info: {
    description: '';
    displayName: 'SurveyQuestion';
    icon: 'rotate';
  };
  attributes: {
    Active: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    Question: Schema.Attribute.Text & Schema.Attribute.Required;
    Type: Schema.Attribute.Enumeration<
      ['Boolean', 'MultipleChoice', 'ShortAnswer', 'LongAnswer', 'Feedback']
    >;
  };
}

export interface LayoutSurveyQuestionIdList extends Struct.ComponentSchema {
  collectionName: 'components_layout_survey_question_id_lists';
  info: {
    description: '';
    displayName: 'SurveyQuestionIdList';
  };
  attributes: {
    survey_question: Schema.Attribute.Relation<
      'oneToOne',
      'api::survey-question.survey-question'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'company.primary-contact': CompanyPrimaryContact;
      'company.secondary-contact': CompanySecondaryContact;
      'config-social-link.social-link': ConfigSocialLinkSocialLink;
      'data.assigned-survey-question-ids': DataAssignedSurveyQuestionIds;
      'data.question-id-list': DataQuestionIdList;
      'data.updated-by-user': DataUpdatedByUser;
      'layout.address': LayoutAddress;
      'layout.child-section': LayoutChildSection;
      'layout.club-event': LayoutClubEvent;
      'layout.club-organizer': LayoutClubOrganizer;
      'layout.event-host-contact': LayoutEventHostContact;
      'layout.flyer-dates': LayoutFlyerDates;
      'layout.guiddance': LayoutGuiddance;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.mission-statement': LayoutMissionStatement;
      'layout.newsletter-form': LayoutNewsletterForm;
      'layout.resources': LayoutResources;
      'layout.secondary-content': LayoutSecondaryContent;
      'layout.student-answer': LayoutStudentAnswer;
      'layout.support': LayoutSupport;
      'layout.survey-question': LayoutSurveyQuestion;
      'layout.survey-question-id-list': LayoutSurveyQuestionIdList;
    }
  }
}
