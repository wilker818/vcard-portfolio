<script setup lang="ts">
useHead({
    title: "Contact",
});
</script>

<template>
    <article class="contact active" data-page="contact">
        <header>
            <h2 class="h2 article-title">
                {{ $t("pages.contact.title") }}
            </h2>
        </header>

        <section class="contact-form">
            <h3 class="h3 form-title">
                {{ $t("pages.contact.titleContactForm") }}
            </h3>

            <form action="#" class="form" data-form>
                <div class="input-wrapper">
                    <input
                        type="text"
                        name="fullname"
                        class="form-input"
                        :placeholder="$t('pages.contact.placeholderFullName')"
                        required
                        data-form-input
                    />

                    <input
                        type="email"
                        name="email"
                        class="form-input"
                        :placeholder="
                            $t('pages.contact.placeholderEmailAdress')
                        "
                        required
                        data-form-input
                    />
                </div>

                <textarea
                    name="message"
                    class="form-input"
                    :placeholder="$t('pages.contact.placeholderYourMessage')"
                    required
                    data-form-input
                />

                <button class="form-btn" type="submit" disabled data-form-btn>
                    <ion-icon name="paper-plane" />
                    <span> {{ $t("pages.contact.buttonSendMessage") }}</span>
                </button>
            </form>
        </section>
    </article>
</template>
