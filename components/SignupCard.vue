<script setup lang="ts">
import { FieldType, type InputEvent } from "@/types/types";

const email = ref("");
const password = ref("");
const receiveExtras = ref(false);
const errorMessages = reactive<{
  email?: string;
  password?: string;
}>({
  email: undefined,
  password: undefined,
});
const showPassword = ref(false);

const canSignUp = computed(() => email.value.length && password.value.length);
const computedIconName = computed(
  () => `interface-edit-${showPassword.value ? "off" : "on"}`
);

function handleInput(event: InputEvent, type: FieldType) {
  if (type === FieldType.EMAIL) {
    errorMessages[type] = undefined;
    email.value = event.target.value;
  }

  if (type === FieldType.PASSWORD) {
    errorMessages[type] = undefined;
    password.value = event.target.value;
  }
}

function handleToggleChange(event: InputEvent) {
  receiveExtras.value = event.target.checked;
}

function handleSubmit(event: PointerEvent) {
  event.preventDefault();
  const payload = {
    email: email.value,
    password: password.value,
    extras: receiveExtras.value,
  };

  console.log(payload);
  navigateTo("/welcome-page");
}

function validateInput(type: FieldType) {
  if (
    (type === FieldType.EMAIL && !email.value.length) ||
    (type === FieldType.PASSWORD && !password.value.length)
  ) {
    errorMessages[type] = `${type} field is required.`;
  }
}

function handlePasswordVisibility(event: PointerEvent) {
  event.preventDefault();
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <ClientOnly>
    <provet-card class="card">
      <h2 slot="header">Sign up</h2>
      <form action="#">
        <provet-stack>
          <provet-input
            label="Email"
            name="email"
            type="email"
            placeholder="user@example.com"
            required
            expand
            :value="email"
            :error="errorMessages.email"
            @input="handleInput($event, FieldType.EMAIL)"
            @change="validateInput(FieldType.EMAIL)"
          ></provet-input>
          <provet-input
            label="Password"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
            expand
            required
            :error="errorMessages.password"
            :value="password"
            @input="handleInput($event, FieldType.PASSWORD)"
            @change="validateInput(FieldType.PASSWORD)"
          >
            <provet-button slot="end" @click="handlePasswordVisibility">
              <provet-icon :name="computedIconName" size="l"></provet-icon>
            </provet-button>
          </provet-input>
          <provet-toggle
            size="s"
            label="Receive occasional product updates and announcements."
            :checked="receiveExtras"
            @change="handleToggleChange"
          ></provet-toggle>
          <provet-button
            type="submit"
            expand
            variant="primary"
            :disabled="!canSignUp"
            @click="handleSubmit"
            >Sign up</provet-button
          >
        </provet-stack>
      </form>
    </provet-card>
  </ClientOnly>
</template>
