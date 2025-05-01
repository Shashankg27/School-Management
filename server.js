const app = require('./app');
const { createTable } = require('./controllers/school');
const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await createTable();
        console.log('Database table is ready.');

        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to create table:', err);
        process.exit(1);
    }
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
