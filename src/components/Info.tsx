import './Widget/Widget.scss';

type Info = {
  feels: number;
  hum: number;
  temp: number;
};

export const Info: React.FC<Info> = ({ feels, hum, temp }) => {
  return (
    <div className="widget-info">
      <div className="widget-info-feels">
        <span>Чувствуется как</span>
        <span>{feels} °C</span>
      </div>
      <div className="widget-info-temp">
        <span>Температура</span>
        <span>{temp} °C</span>
      </div>
      <div className="widget-info-hum">
        <span>Влажность</span>
        <span>{hum} %</span>
      </div>
    </div>
  );
};
