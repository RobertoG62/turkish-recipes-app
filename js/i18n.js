const i18n = (() => {
    let currentLang = 'he';

    const translations = {
        he: {
            meta: {
                title: 'המטבח התורכי — מתכונים אותנטיים',
                description: 'המטבח התורכי — מתכונים אותנטיים מתורכי, בעברית.'
            },
            header: {
                logo: 'המטבח התורכי',
                backToRecipes: 'חזרה למתכונים'
            },
            hero: {
                title: 'המטבח התורכי',
                subtitle: 'מתכונים אותנטיים מהלב של איסטנבול',
                searchPlaceholder: 'חיפוש מתכון...'
            },
            categories: {
                all: 'הכל',
                'קבבים ובשרים': 'קבבים ובשרים',
                'מזה וסלטים': 'מזה וסלטים',
                'מאפים ובורקס': 'מאפים ובורקס',
                'מרקים ותבשילים': 'מרקים ותבשילים',
                'קינוחים ומתוקים': 'קינוחים ומתוקים'
            },
            difficulty: {
                'קל': 'קל',
                'בינוני': 'בינוני',
                'מאתגר': 'מאתגר'
            },
            detail: {
                prepTime: 'זמן הכנה',
                cookTime: 'זמן בישול',
                servings: 'מנות',
                difficulty: 'רמת קושי',
                ingredients: 'מצרכים',
                instructions: 'הוראות הכנה',
                categories: 'קטגוריות',
                whatsappShare: 'שלח רשימת קניות ב-WhatsApp',
                minutes: 'דקות'
            },
            search: {
                noResults: 'לא נמצאו מתכונים',
                tryAgain: 'נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת',
                clearFilters: 'נקה חיפוש',
                resultsCount: 'נמצאו {count} מתכונים'
            },
            loading: 'טוען מתכונים...',
            footer: {
                tagline: 'המטבח התורכי — מתכונים אותנטיים מתורכי, בעברית',
                backToHub: 'לעוד מתכוני עולם — חזרה לרכזת המתכונים'
            }
        },
        en: {
            meta: {
                title: 'Turkish Cuisine — Authentic Recipes',
                description: 'Turkish Cuisine — Authentic recipes from Turkey, in English.'
            },
            header: {
                logo: 'Turkish Cuisine',
                backToRecipes: 'Back to Recipes'
            },
            hero: {
                title: 'Turkish Cuisine',
                subtitle: 'Authentic recipes from the heart of Istanbul',
                searchPlaceholder: 'Search recipe...'
            },
            categories: {
                all: 'All',
                'קבבים ובשרים': 'Kebabs & Meats',
                'מזה וסלטים': 'Mezze & Salads',
                'מאפים ובורקס': 'Pastries & Börek',
                'מרקים ותבשילים': 'Soups & Stews',
                'קינוחים ומתוקים': 'Desserts & Sweets',
                'Kebabs & Meats': 'Kebabs & Meats',
                'Mezze & Salads': 'Mezze & Salads',
                'Pastries & Börek': 'Pastries & Börek',
                'Soups & Stews': 'Soups & Stews',
                'Desserts & Sweets': 'Desserts & Sweets'
            },
            difficulty: {
                'קל': 'Easy',
                'בינוני': 'Medium',
                'מאתגר': 'Hard',
                'Easy': 'Easy',
                'Medium': 'Medium',
                'Hard': 'Hard'
            },
            detail: {
                prepTime: 'Prep Time',
                cookTime: 'Cook Time',
                servings: 'Servings',
                difficulty: 'Difficulty',
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                categories: 'Categories',
                whatsappShare: 'Share shopping list on WhatsApp',
                minutes: 'minutes'
            },
            search: {
                noResults: 'No recipes found',
                tryAgain: 'Try different search terms or select another category',
                clearFilters: 'Clear search',
                resultsCount: 'Found {count} recipes'
            },
            loading: 'Loading recipes...',
            footer: {
                tagline: 'Turkish Cuisine — Authentic recipes from Turkey',
                backToHub: 'More world recipes — Back to Recipe Hub'
            }
        }
    };

    function t(key) {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value || key;
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }
        currentLang = lang;
    }

    function getLanguage() {
        return currentLang;
    }

    function detectLanguage() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        return 'en';
    }

    function init() {
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);
        return detectedLang;
    }

    return {
        t,
        setLanguage,
        getLanguage,
        detectLanguage,
        init
    };
})();
