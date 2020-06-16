import * as React from 'react';
import { useDispatch } from 'react-redux';
import { match } from 'react-router-dom';
import styled from '@emotion/styled';

import SEO from 'modules/components/SEO';
import { colors } from 'styles/_variables.style';
import Form from 'modules/components/Form';
import Select from 'modules/components/Shared/ui/Select';
import Button from 'modules/components/Shared/ui/Button';
import { mq } from 'styles/_global.style';
import BookingDetailImage from 'modules/components/Session/SessionDetailImage';
import { Tabs, TabPanel } from 'modules/components/Shared/ui/Tabs';
import Textarea from 'modules/components/Shared/ui/Textarea';
import SessionReviewCard, { ISessionReviewCardProp } from 'modules/components/Session/SessionReviewCard';
import { goToNextPage } from 'store/actions/navigation';
import { validationSchemas } from 'utils';

export interface ISessionDetailPageProp {
  title: string;
  match: match<{
    sessionId: string;
  }>;
}

const imageUrls: string[] = [
  'https://images.pexels.com/photos/3561145/pexels-photo-3561145.jpeg?cs=srgb&dl=portrait-photography-of-beautiful-woman-3561145.jpg&fm=jpg',
  'https://images.pexels.com/photos/3886337/pexels-photo-3886337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/3926171/pexels-photo-3926171.jpeg?cs=srgb&dl=woman-in-yellow-knit-cap-and-plaid-dress-shirt-3926171.jpg&fm=jpg',
  'https://images.pexels.com/photos/3923560/pexels-photo-3923560.jpeg?cs=srgb&dl=man-holding-a-flower-3923560.jpg&fm=jpg',
];

const SessionDetailPage = (props: ISessionDetailPageProp): React.ReactElement => {
  const {
    match: {
      params: { sessionId },
    },
  } = props;
  const [price, setPrice] = React.useState<string | number>('Select a Package:');
  const dispatch = useDispatch();

  const initialValues = {
    package: '',
    avaiableTime: '',
    avaiableDay: '',
  };
  const packages = [
    {
      id: 1,
      name: 'Standard',
      value: 24000,
    },
    {
      id: 2,
      name: 'Premuim',
      value: 35000,
    },
    {
      id: 3,
      name: 'Platinum',
      value: 50000,
    },
  ];

  const reviews: ISessionReviewCardProp[] = [
    {
      name: 'Joghead',
      date: '2 weeks ago',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam ipsum minima esse minus illum distinctio aspernatur tempore hic, ipsa accusantium sint molestias facilis corrupti rerum velit, doloremamet voluptate?',
    },
    {
      name: 'Joghead',
      date: '2 weeks ago',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam ipsum minima esse minus illum distinctio aspernatur tempore hic, ipsa accusantium sint molestias facilis corrupti rerum velit, doloremamet voluptate?',
    },
    {
      name: 'Joghead',
      date: '2 weeks ago',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam ipsum minima esse minus illum distinctio aspernatur tempore hic, ipsa accusantium sint molestias facilis corrupti rerum velit, doloremamet voluptate?',
    },
  ];
  const onSubmit = (data: Record<string, unknown>): void => {
    dispatch(goToNextPage({ nextPageRoute: '/session/checkout/' }));

    console.log(data);
  };

  const validate = (value: string): boolean => {
    return !!value;
  };

  const goBack = (): void => {
    dispatch(goToNextPage({ nextPageRoute: '/session' }));
  };

  React.useEffect(() => {
    console.log(sessionId);
  }, []);

  return (
    <>
      <SEO title={props.title} />
      <SessionDetailPage.Layout>
        <SessionDetailPage.FirstWrapper>
          <SessionDetailPage.Image>
            <BookingDetailImage imageUrls={imageUrls} />
          </SessionDetailPage.Image>
          <SessionDetailPage.Description>
            <h2>free session</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam ipsum minima esse minus illum
              distinctio aspernatur tempore hic, ipsa accusantium sint molestias facilis corrupti rerum velit, dolorem
              amet voluptate?
            </p>
            <div>
              <span>{price}</span>
            </div>
            <div style={{ margin: '1em 0' }}>
              <Form
                feedbackInfo=""
                handelOnSubmit={onSubmit}
                defaultValues={initialValues}
                onTouchValidationSchemas={validate}
                onSubmitValidationSchema={validationSchemas.imageUploadOnSubmit}
              >
                {({ values, handleChange }): React.ReactNode => {
                  const getPrice = (values: Record<string, string | number>): void => {
                    const [selectedObj] = packages.filter(p => p.value === +values.package);
                    selectedObj && setPrice(selectedObj.value);
                  };
                  React.useEffect(() => {
                    getPrice(values);
                  }, [values.package]);
                  return (
                    <>
                      <div>
                        <Select
                          name="package"
                          options={packages}
                          handleChange={handleChange}
                          value={values.package}
                          placeholder="Select a package"
                        />
                      </div>
                      <SessionDetailPage.TimeSelectWrapper>
                        <Select
                          name="avaiableDay"
                          options={packages}
                          handleChange={handleChange}
                          value={values.avaiableDay}
                          placeholder="Choose date"
                        />
                        <Select
                          name="avaiableTime"
                          options={packages}
                          handleChange={handleChange}
                          value={values.avaiableTime}
                          placeholder="Choose time"
                        />
                      </SessionDetailPage.TimeSelectWrapper>
                      <SessionDetailPage.ButtonWrapper>
                        <Button
                          title="Back"
                          type="button"
                          buttonType="block"
                          buttonStyle="primary"
                          handleOnclick={goBack}
                        />
                        <Button title="Book " type="submit" buttonType="block" buttonStyle="primary" />
                      </SessionDetailPage.ButtonWrapper>
                    </>
                  );
                }}
              </Form>
            </div>
          </SessionDetailPage.Description>
        </SessionDetailPage.FirstWrapper>
        <SessionDetailPage.SecondWrapper>
          <Tabs activeTab={{ id: 1 }}>
            <TabPanel id={1} title="Details">
              <div>
                <p style={{ margin: 0 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam blanditiis aspernatur ad voluptate
                  doloribus. Aspernatur excepturi ipsa dolorum sit repudiandae. Aspernatur aliquam ex odio officia odit
                  quaerat velit distinctio sed autem similique at explicabo error aperiam recusandae eveniet porro,
                  labore eius incidunt deserunt accusamus harum non dolorem blanditiis? Cumque recusandae amet laborum
                  voluptate, nulla, doloremque, odio maxime ipsa quisquam nesciunt ut. Aut nostrum eum vel a illo neque
                  impedit esse architecto natus. Ratione sit reprehenderit provident modi laboriosam ex mollitia
                  similique, ducimus facilis optio! Similique ullam totam, obcaecati molestiae voluptate facere
                  asperiores corporis numquam nemo maiores eaque assumenda sapiente ipsum cum minus debitis libero
                  reprehenderit sed laborum incidunt animi architecto tenetur.
                </p>
              </div>
            </TabPanel>
            <TabPanel id={2} title="Review">
              <div>
                {reviews.map((review, i) => (
                  <SessionReviewCard key={i} name={review.name} date={review.date} review={review.review} />
                ))}
                <div style={{ margin: '1em' }}>
                  <Form
                    feedbackInfo=""
                    handelOnSubmit={onSubmit}
                    defaultValues={initialValues}
                    onTouchValidationSchemas={validate}
                  >
                    {({ values, handleChange }): React.ReactNode => {
                      return (
                        <>
                          <div>
                            <Textarea
                              name="review"
                              placeholder="Leave a review ..."
                              value={values.message}
                              handleChange={handleChange}
                            />
                          </div>
                          <div>
                            <Button title="Submit " type="submit" buttonType="normal" buttonStyle="primary" />
                          </div>
                        </>
                      );
                    }}
                  </Form>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </SessionDetailPage.SecondWrapper>
      </SessionDetailPage.Layout>
    </>
  );
};

SessionDetailPage.Layout = styled.section`
  padding: 6.25em 2em;
  max-width: 900px;
  margin: 0 auto;
`;

SessionDetailPage.FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${colors.DARKER_GRAY};
  border-radius: 3px;
  padding: 1em;
  margin-bottom: 1em;
  min-height: 40vh;

  ${mq[1]} {
    border-radius: unset;
    margin-bottom: unset;
    box-shadow: unset;
    flex-direction: row;
  }
`;
SessionDetailPage.SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${colors.DARKER_GRAY};
  border-radius: 3px;
  padding: 1em;
  margin-bottom: 1em;
  min-height: 40vh;
`;
SessionDetailPage.Image = styled.div`
  padding: 1em;
  ${mq[1]} {
    width: 60%;
  }
`;

SessionDetailPage.Description = styled.div`
  padding: 1em;
  width: 100%;

  ${mq[1]} {
    width: 40%;
  }

  h2 {
    margin-top: 0;
    border-bottom: 1px solid ${colors.DARKER_GRAY};
    padding-bottom: 0.5em;
    font-family: Futura;
    text-transform: uppercase;
  }
`;
SessionDetailPage.ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  button:first-of-type,
  div:first-of-type {
    margin-right: 1em;
  }
`;

SessionDetailPage.TimeSelectWrapper = SessionDetailPage.ButtonWrapper.withComponent('div');

export default SessionDetailPage;
