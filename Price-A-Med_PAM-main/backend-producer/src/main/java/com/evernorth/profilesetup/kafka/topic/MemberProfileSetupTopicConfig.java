package com.evernorth.profilesetup.kafka.topic;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class MemberProfileSetupTopicConfig {
    @Bean
    public NewTopic memberProfileSetupTopic() {
        return TopicBuilder.name("MemberProfileSetup")
                .partitions(10)
                .replicas(1)
                .build();
    }
    
}
