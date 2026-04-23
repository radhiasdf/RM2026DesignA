const container = document.getElementById("lesson-outline");

container.innerHTML = `
<h2 class="text-xl font-semibold mb-2">${lessonData.title}</h2>
<h3 class="font-bold">Learning Outcome</h3>
<p class="flex items-start gap-2">
    <span class="text-blue-500 mt-1">•</span>
    <span>${lessonData.learningOutcome}</span>
</p>
<h3 class="mt-4 font-bold">Sub Topic</h3>
<ul class="space-y-2 mt-1">
    ${lessonData.subTopics.map(topic => `
    <li class="flex items-start gap-2">
        <span class="text-blue-500 mt-1">•</span>
        <span>${topic}</span>
    </li>
    `).join("")}
</ul>
`;