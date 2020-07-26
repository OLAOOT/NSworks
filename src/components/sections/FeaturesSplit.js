import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";

const propTypes = {
  ...SectionSplitProps.types
};

const defaultProps = {
  ...SectionSplitProps.defaults
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color"
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "여기다가도 딱히",
    paragraph:
      "넣을만한게 안보이노 일단 여러줄 써야지 으러럴러러러럴러 집가고싶다 전역하고싶다 언제끝나노이거"
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {/* 이것도 걍 없앨까 */}
                </div>
                <h3
                  className="mt-0 mb-12"
                  style={{
                    color: "#000000"
                  }}
                >
                  Virtual Integration
                </h3>
                <p
                  className="m-0"
                  style={{ fontSize: 0.8 + "rem", color: "#000000" }}
                >
                  가상화 서비스를 통해 고객의 비즈니스 효율성을 높이며
                  <br />
                  자본 비용과 운용 비율의 절감을 극대화 할 수 있게 하겠습니다
                </p>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="https://cruip.com/"
                  style={{ marginTop: 50 + "px" }}
                >
                  자세히 보기
                </Button>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-01.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {/* 초록초록초록초록 */}
                </div>
                <h3
                  className="mt-0 mb-12"
                  style={{
                    color: "#000000"
                  }}
                >
                  Virtual Infrastructure
                </h3>
                <p
                  className="m-0"
                  style={{ fontSize: 0.8 + "rem", color: "#000000" }}
                >
                  압도적인 시장 점유율과 높은 신뢰성 및 안전성을 가진 VMware
                  기반 가상화를 구현합니다
                </p>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="https://cruip.com/"
                  style={{ marginTop: 50 + "px" }}
                >
                  자세히 보기
                </Button>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-02.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {/* 그린 그린 그린 */}
                </div>
                <h3
                  className="mt-0 mb-12"
                  style={{
                    color: "#000000"
                  }}
                >
                  Technical Support
                </h3>
                <p
                  className="m-0"
                  style={{ fontSize: 0.8 + "rem", color: "#000000" }}
                >
                  전문 엔지니어의 풍부한 경험으로 차별화된 서비스를 지원합니다
                </p>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="https://cruip.com/"
                  style={{ marginTop: 50 + "px" }}
                >
                  자세히 보기
                </Button>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-03.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {/* 그린 그린 그린 */}
                </div>
                <h3
                  className="mt-0 mb-12"
                  style={{
                    color: "#000000"
                  }}
                >
                  IT Consulting
                </h3>
                <p
                  className="m-0"
                  style={{ fontSize: 0.8 + "rem", color: "#000000" }}
                >
                  고객의 요구 사항에 맞는 맞춤형 최적 솔루션을 제공하겠습니다
                </p>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  href="https://cruip.com/"
                  style={{ marginTop: 50 + "px" }}
                >
                  자세히 보기
                </Button>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-03.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
