import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import classNames from 'classnames';
import Highcharts from 'highcharts';

// components
import { Container } from '@layout/container/Container';

// contexts
import { LanguageContext } from '@contexts/language';
import { LinearViewContext } from '@contexts/linearView';

// styles
import styles from './AssetGraph.module';

export const AssetGraph: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { linearView } = useContext(LinearViewContext);

  const convertString = (str: any, valsArray: any) => {
    str = str.split("\t")
    str = str.map((x: any, i: any) => {
      x = x.split("/");
      let month = x[0]
      let day = x[1]
      let year = x[2]
      return [Date.UTC(year, month - 1, day), Number(valsArray[i])]
    })
    return str
  }

  const convertVals = (str: any) => {
    return str.split("\t")
  }

  function getData(id: string) {
    return convertString(
      ASSETS_GRAPH_CONFIG.datesString,
      convertVals(
        ASSETS_GRAPH_CONFIG.seriesData[id].data
      )
    );
  }

  const [graphHoverItem, setGraphHoverItem] = useState(ASSETS_GRAPH_CONFIG.seriesIds[0]);
  const [graphHoverColor, setGraphHoverColor] = useState(
    ASSETS_GRAPH_CONFIG.seriesData[ASSETS_GRAPH_CONFIG.seriesIds[0]].color
  );

  const getSeriesArray = () => {
    return ASSETS_GRAPH_CONFIG.seriesIds.map((seriesId) => {
      const series = ASSETS_GRAPH_CONFIG.seriesData[seriesId];
      return {
        type: series.type,
        name: series.name[language],
        data: getData(seriesId),
        color: series.color,
        events: {
          mouseOver: () => {
            setGraphHoverItem(seriesId);
            setGraphHoverColor(series.hoverData.mouseOverColor);
          },
          mouseOut: () => {
            setGraphHoverItem(ASSETS_GRAPH_CONFIG.seriesIds[0]);
            setGraphHoverColor(series.hoverData.mouseOutColor);
          },
        } 
      };
    });
  }

  const generateGraphs = () => {
    let intPadding = 10;

    Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    })
    Highcharts.chart('linear', {
      chart: ASSETS_GRAPH_CONFIG.chart.linear,
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        labels: {
          format: '${value:%Y}',
          style: {
            fontSize: '1rem',
            fontFamily: 'Open Sans, sans-serif',
            color: "#505050"
          },
          align: 'left',
          x: -4,
          y: 26
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        type: 'linear',
        // minorTickInterval: 1,
        gridLineColor: '#ffffff',
        gridLineWidth: 0,
        tickLength: 0,
        accessibility: {
          rangeDescription: 'Range: 0.1 to 1000'
        },
        labels: {
          format: '${text}',
          style: {
            fontSize: '1rem',
            fontFamily: 'Open Sans, sans-serif',
            color: "#505050"
          },
          align: 'left',
          x: 0,
          y: -6
        },
        opposite: true,
        showLastLabel: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>${point.y:,.2f}</b>'
      },
      plotOptions: {
        series: {
          pointStart: 1950,
          lineWidth: 2,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          },
          events: {
            legendItemClick: function () {
              return false;
            }
          }
        }
      },
      legend: {
        itemStyle: {
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '1rem',
          color: "#505050",
          symbolPadding: intPadding + 5
        }
      },
      series: getSeriesArray(),
    })
    Highcharts.chart('container', {
      lang: {
        thousandsSep: ','
      },
      chart: ASSETS_GRAPH_CONFIG.chart.logarithmic,
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        labels: {
          format: '{value:%Y}',
          style: {
            fontSize: '1rem',
            fontFamily: 'Open Sans, sans-serif',
            color: "#505050"
          },
          align: 'left',
          x: -18,
          y: 26
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        type: 'logarithmic',
        // minorTickInterval: 1,
        gridLineColor: '#ffffff',
        gridLineWidth: 0,
        tickLength: 0,
        tickPositions: [0, 1, 10, 100, 1000, 10000].map((v) => Math.log10(v)),
        accessibility: {
          rangeDescription: 'Range: 0.1 to 1000'
        },
        labels: {
          format: '${text}',
          style: {
            fontSize: '1rem',
            fontFamily: 'Open Sans, sans-serif',
            color: "#505050"
          },
          align: 'left',
          x: 0,
          y: -6
        },
        opposite: true,
        showLastLabel: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>${point.y:,.2f}</b>'
      },
      plotOptions: {
        series: {
          // fillOpacity: 0.2
          stickyTracking: false,
          pointStart: 1950,
          lineWidth: 2,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          },
          events: {
            legendItemClick: function () {
              return false;
            }
          }
        }
      },
      legend: {
        itemStyle: {
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '1rem',
          color: "#505050",
          symbolPadding: intPadding + 5
        }
      },
      series: getSeriesArray(),
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    generateGraphs();
  });

  const whiteLabelGraph = () => {
    setTimeout(() => {
      let highChartsLabel = document.getElementsByClassName('highcharts-credits');
      highChartsLabel[0].innerHTML = "";
      highChartsLabel[1].innerHTML = "";
    }, 1000)
  }

  whiteLabelGraph();

  useEffect(() => {
    whiteLabelGraph();
  }, [linearView]);

  // Always generate the graph when the page loads
  useEffect(() => {
    generateGraphs();
  }, []);

  // TODO do you need one for linear to logarithmic
  useEffect(() => {
    generateGraphs();
  }, [language]);

  return (
    <div className={styles.main}>
      <Container className={styles.headerContainer}>
        <div
          className={classNames(styles.infographicCircle,
            graphHoverColor === '#ffffff'
              || graphHoverColor === '#FFC000'
              ? styles.blackText : null)}
          style={{ background: `${graphHoverColor}` }}
        >
          <h1>{ASSETS_GRAPH_CONFIG.seriesData[graphHoverItem].hoverData.name[language]}</h1>
          <p>{ASSETS_GRAPH_CONFIG.seriesData[graphHoverItem].hoverData.text[language]}</p>
        </div>
      </Container>
      <div className={styles.chartContainer}>
        <div
          id="container" 
          className={classNames(
            styles.chartContainer,
            linearView ? styles.displayNone : null
          )} 
        />
        <div
          id="linear"
          className={classNames(
            styles.chartContainer,
            linearView ? null : styles.displayNone
          )}
        />
      </div>
    </div>
  );
};
