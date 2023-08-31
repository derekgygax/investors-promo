import classNames from 'classnames';
import { register } from 'swiper/element/bundle';

// types
import { DataParams } from '../../types/dataParams';
import { DataObject } from '@layout/dataObject/DataObject';

// This is using the new swiper.js swiper element
// it kinda sucks because there is no typscript definition
// but on github we found someonet that wrote one
// Its in swiper.d.ts at the top level and in ts config

register();

type SwiperMobileProps = {
  classNameMain: string;
  dataParams: DataParams;
  topicData: TopicData[];
  topicId: string;
};

export const SwiperMobile: React.FC<SwiperMobileProps> = ({
  classNameMain,
  dataParams,
  topicData,
  topicId,
 }) => {

  const dataStyles = dataParams.styles;
  const showSteps: boolean = dataParams.showSteps ? dataParams.showSteps : false;

  return (
    <div className={classNames(classNameMain)}>
      <swiper-container
        pagination={true}
        slides-per-view="1"
      >
        {topicData.map((data, index) => {
          return(
            <swiper-slide
              key={`${topicId}_desktop_data_${index}`}
            >
              <DataObject
                data={ data }
                dataStyles={ dataStyles }
                objectNumber={ index }
                showSteps={ showSteps }
                topicId={ topicId }
              />
            </swiper-slide>
          )
        })}
      </swiper-container>
    </div>
  );
};