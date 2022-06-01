import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  methods: 'GET, POST',
};

const funcCors = cors(corsOptions);

export default funcCors;
