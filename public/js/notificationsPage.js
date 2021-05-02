$(document).ready(() => {
    $.get('/api/notifications', (data) => {
        outputNotificationsList(data, $('.resultsContainer'));
    });
});

$("#markNotificationsAsRead").click(() => markNotificationsAsOpened());

