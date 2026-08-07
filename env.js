// Supabase & Application Environment Configuration
const ENV_CONFIG = {
    SUPABASE_URL: 'https://dyvvhmuegtzooijrtwyd.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY'
};

if (typeof window !== 'undefined') {
    window.ENV = ENV_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ENV_CONFIG;
}
