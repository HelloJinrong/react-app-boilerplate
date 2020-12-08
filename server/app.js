const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

router.get('/users', async ctx => {
	ctx.body = [
		{
			name: 'qin',
			age: 24,
		},
		{
			name: 'zha',
			age: 26,
		},
	];
});

router.get('/usersAll', async ctx => {
	ctx.body = [
		{
			name: 'qin',
			age: 24,
		},
	];
});

router.post('/users/add', async ctx => {
	// eslint-disable-next-line no-console
	console.log(111, ctx.request.body);

	ctx.body = [
		{
			name: 'qin3',
			age: 27,
		},
	];
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
	// eslint-disable-next-line no-console
	console.log('server is running at port 3001');
});
